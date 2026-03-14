const fs = require('fs'); const s = fs.readFileSync('src/data/complication-data.ts', 'utf8');
const lines = s.split(/\r?\n/);
let balance = 0; for (let i = 0; i < lines.length; i++) {
    const l = lines[i]; for (const ch of l) { if (ch === '{') balance++; if (ch === '}') balance--; }
    if (i < 1000 && (i < 200 || Math.abs(balance) % 5 === 0)) {
        console.log((i + 1).toString().padStart(4), 'bal=', balance, l.slice(0, 120));
    }
}
console.log('FINAL BALANCE', balance);
