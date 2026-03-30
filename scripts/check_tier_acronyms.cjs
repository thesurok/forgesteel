const fs = require('fs');
const path = require('path');

const root = path.join(process.cwd(), 'src', 'data');
const files = [];

function walk(dirPath) {
    for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
        const fullPath = path.join(dirPath, entry.name);

        if (entry.isDirectory()) {
            walk(fullPath);
            continue;
        }

        if (entry.isFile() && fullPath.endsWith('.ts')) {
            files.push(fullPath);
        }
    }
}

walk(root);

const tierPattern = /(tier[123]\s*:\s*)(['"])([^'"\r\n]*?)\2/g;
const latinStatPattern = /\b[MARIPmarip]\s*<|\+\s*[MARIPmarip]\b|\b[MARIPmarip]\s+or\s+[MARIPmarip]\b/g;
const issues = [];

for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    let match;

    while ((match = tierPattern.exec(content)) !== null) {
        const tierText = match[3];
        latinStatPattern.lastIndex = 0;

        if (!latinStatPattern.test(tierText)) {
            continue;
        }

        const line = content.slice(0, match.index).split(/\r?\n/).length;
        issues.push({
            filePath,
            line,
            tierText
        });
    }
}

if (issues.length === 0) {
    console.log('No Latin stat acronyms found in tier strings.');
    process.exit(0);
}

console.error('Found Latin stat acronyms in tier strings:');

for (const issue of issues) {
    const relativePath = path.relative(process.cwd(), issue.filePath).replace(/\\/g, '/');
    console.error(`- ${relativePath}:${issue.line} -> ${issue.tierText}`);
}

process.exit(1);