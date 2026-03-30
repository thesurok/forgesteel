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
const englishEffectPattern = /\b(?:dazed|frightened|weakened|grabbed|restrained|slowed|taunted|bleeding|prone|charmed|blinded|blind|burning|aflame|save ends|eot)\b|can[’']t stand|can[’']t take triggered actions|speed is 0/gi;
const issues = [];

for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf8');
    let match;

    while ((match = tierPattern.exec(content)) !== null) {
        const tierText = match[3];
        englishEffectPattern.lastIndex = 0;

        if (!englishEffectPattern.test(tierText)) {
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
    console.log('No English core effect terms found in tier strings.');
    process.exit(0);
}

console.error('Found English core effect terms in tier strings:');

for (const issue of issues) {
    const relativePath = path.relative(process.cwd(), issue.filePath).replace(/\\/g, '/');
    console.error(`- ${relativePath}:${issue.line} -> ${issue.tierText}`);
}

process.exit(1);