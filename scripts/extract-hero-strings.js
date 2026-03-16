#!/usr/bin/env node
/*
Simple extractor for HeroClass string literals.

Usage:
  node scripts/extract-hero-strings.js --src src/data/classes --out src/i18n/en/classes [--replace]

Notes:
 - Requires Node.js. This uses the TypeScript compiler API which is usually available when working in a TS repo.
 - The script will parse TS files, find exported const initializers, and collect string literals inside the object literal.
 - It generates a JSON resource per input file (merged if already exists). Pass `--replace` to replace literals with generated keys.
*/

const fs = require('fs');
const path = require('path');
const ts = require('typescript');

function parseArgs() {
    const args = process.argv.slice(2);
    const out = { src: 'src/data/classes', out: 'src/i18n/en/classes', replace: false, file: null };
    for (let i = 0; i < args.length; i++) {
        const a = args[i];
        if (a === '--src') out.src = args[++i];
        else if (a === '--out') out.out = args[++i];
        else if (a === '--replace') out.replace = true;
        else if (a === '--file') out.file = args[++i];
    }
    return out;
}

function walkDir(dir, cb) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walkDir(full, cb);
        else if (e.isFile() && full.endsWith('.ts')) cb(full);
    }
}

function ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function stripQuotes(s) {
    return s.replace(/^['`\"]|['`\"]$/g, '');
}

function findNearestIdAncestor(node) {
    let cur = node.parent;
    while (cur) {
        if (ts.isObjectLiteralExpression(cur)) {
            for (const prop of cur.properties) {
                if (ts.isPropertyAssignment(prop) && prop.name && prop.name.getText() === 'id') {
                    const initializer = prop.initializer;
                    if (ts.isStringLiteral(initializer) || ts.isNoSubstitutionTemplateLiteral(initializer)) {
                        return stripQuotes(initializer.getText());
                    }
                }
            }
        }
        cur = cur.parent;
    }
    return null;
}

function buildPropPath(node) {
    const parts = [];
    let cur = node.parent;
    while (cur && !ts.isSourceFile(cur)) {
        if (ts.isPropertyAssignment(cur) && cur.name) parts.push(cur.name.getText());
        cur = cur.parent;
    }
    return parts.reverse().join('.');
}

function extractStringsFromFile(filePath) {
    const src = fs.readFileSync(filePath, 'utf8');
    const sf = ts.createSourceFile(filePath, src, ts.ScriptTarget.Latest, true);
    const results = []; // { key, text, start, end }

    function visit(node) {
        // Look for exported const with object literal initializer
        if (ts.isVariableStatement(node) && node.modifiers && node.modifiers.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
            for (const decl of node.declarationList.declarations) {
                if (decl.initializer && ts.isObjectLiteralExpression(decl.initializer)) {
                    collectStrings(decl.initializer);
                }
            }
        }
        ts.forEachChild(node, visit);
    }

    function collectStrings(obj) {
        function recurse(n) {
            if (!n) return;
            if (ts.isStringLiteral(n) || ts.isNoSubstitutionTemplateLiteral(n)) {
                const text = stripQuotes(n.getText());
                const propName = (n.parent && ts.isPropertyAssignment(n.parent) && n.parent.name) ? n.parent.name.getText() : null;
                const nearestId = findNearestIdAncestor(n);
                const propPath = buildPropPath(n) || 'root';
                results.push({ node: n, text, propName, nearestId, propPath, start: n.getStart(), end: n.getEnd() });
            } else if (ts.isTemplateExpression(n)) {
                const text = n.getText();
                const propName = (n.parent && ts.isPropertyAssignment(n.parent) && n.parent.name) ? n.parent.name.getText() : null;
                const nearestId = findNearestIdAncestor(n);
                const propPath = buildPropPath(n) || 'root';
                results.push({ node: n, text, propName, nearestId, propPath, start: n.getStart(), end: n.getEnd() });
            }
            ts.forEachChild(n, recurse);
        }
        recurse(obj);
    }

    visit(sf);
    return { results, src, sourceFile: sf };
}

function generateKey(fileBase, entry) {
    const parts = ['classes', fileBase];
    if (entry.nearestId) parts.push(entry.nearestId.replace(/[^a-zA-Z0-9-_\\.]/g, ''));
    else if (entry.propPath && entry.propPath !== 'root') parts.push(entry.propPath.replace(/[^a-zA-Z0-9-_.]/g, '_'));
    if (entry.propName) parts.push(entry.propName);
    else parts.push('text');
    return parts.join('.');
}

function mergeJson(outPath, newObj) {
    let existing = {};
    if (fs.existsSync(outPath)) {
        try { existing = JSON.parse(fs.readFileSync(outPath, 'utf8')); } catch (e) { existing = {}; }
    }
    const merged = Object.assign({}, existing, newObj);
    fs.writeFileSync(outPath, JSON.stringify(merged, null, 2) + '\n', 'utf8');
}

function run() {
    const args = parseArgs();
    ensureDir(args.out);
    const files = [];
    if (args.file) {
        const p = path.resolve(args.file);
        if (!fs.existsSync(p)) {
            console.error('File not found:', p);
            process.exit(1);
        }
        if (!p.endsWith('.ts')) {
            console.error('Only .ts files are supported for --file');
            process.exit(1);
        }
        files.push(p);
    } else {
        walkDir(args.src, f => files.push(f));
    }
    if (files.length === 0) {
        console.error('No .ts files found under', args.src);
        process.exit(1);
    }

    for (const f of files) {
        try {
            const rel = path.relative(process.cwd(), f);
            const fileBase = path.basename(f, '.ts');
            const { results, src } = extractStringsFromFile(f);
            if (results.length === 0) continue;

            const resource = {};
            const replacements = [];

            for (const r of results) {
                const key = generateKey(fileBase, r);
                resource[key] = r.text;
                const replacement = `'${key}'`;
                replacements.push({ start: r.start, end: r.end, replacement });
            }

            const outFile = path.join(args.out, fileBase + '.json');
            mergeJson(outFile, resource);

            if (args.replace && replacements.length) {
                replacements.sort((a, b) => b.start - a.start);
                let modified = src;
                for (const rep of replacements) {
                    modified = modified.slice(0, rep.start) + rep.replacement + modified.slice(rep.end);
                }
                fs.writeFileSync(f, modified, 'utf8');
                console.log('Updated', rel);
            } else {
                console.log('Extracted', results.length, 'strings from', rel, '->', path.relative(process.cwd(), path.join(args.out, fileBase + '.json')));
            }
        } catch (e) {
            console.error('Failed to process', f, e);
        }
    }
}

if (require.main === module) run();
