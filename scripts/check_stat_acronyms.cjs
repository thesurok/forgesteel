const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'src');
const files = [];

function walk(dirPath) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            walk(fullPath);
            continue;
        }

        if (!entry.isFile() || !fullPath.endsWith('.ts')) {
            continue;
        }

        if (fullPath.endsWith('.test.ts') || fullPath.endsWith('.d.ts')) {
            continue;
        }

        files.push(fullPath);
    }
}

walk(root);

const latinPotencyPattern = /\b[MARIP]\s*<\s*(?:\[|\d|[Ss]trong|[Aa]verage|[Ww]eak)/g;
const latinDamageBonusPattern = /\+\s*[MARIP]\b/g;
const latinDamageBasePattern = /(^|[^A-Za-zА-Яа-яІіЇїЄєҐґ])([MARIP])(?=\s+(?:(?:acid|cold|corruption|fire|holy|lightning|poison|psychic|shadow|sonic|patron|affinity)\s+)?damage\b)/g;
const mixedStatChoicePattern = /\b(?:[СЛРІП]|[MARIP])\s+(?:or|або)\s+(?:[СЛРІП]|[MARIP])\b/g;
const lowercaseDataPotencyPattern = /\b[marip]\s*<\s*(?:\[|\d|[Ss]trong|[Aa]verage|[Ww]eak)/g;

const issues = [];

for (const filePath of files) {
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    const isDataFile = relativePath.startsWith('src/data/');
    const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);

    for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
        const lineText = lines[lineIndex];
        const patterns = [
            latinPotencyPattern,
            latinDamageBonusPattern,
            latinDamageBasePattern,
            mixedStatChoicePattern
        ];

        if (isDataFile) {
            patterns.push(lowercaseDataPotencyPattern);
        }

        const hasIssue = patterns.some(pattern => {
            pattern.lastIndex = 0;

            if (pattern === mixedStatChoicePattern) {
                const matches = lineText.match(pattern) || [];
                return matches.some(match => /[MARIP]/.test(match));
            }

            return pattern.test(lineText);
        });

        if (!hasIssue) {
            continue;
        }

        issues.push({
            filePath: relativePath,
            line: lineIndex + 1,
            text: lineText.trim()
        });
    }
}

if (issues.length === 0) {
    console.log('No Latin stat acronyms found in user-facing formula strings.');
    process.exit(0);
}

console.error('Found Latin stat acronyms in user-facing formula strings:');

for (const issue of issues) {
    console.error(`- ${issue.filePath}:${issue.line} -> ${issue.text}`);
}

process.exit(1);