const fs = require('fs');
const p = 'src/data/complication-data.ts';
const s = fs.readFileSync(p, 'utf8');
const counts = (re) => (s.match(re) || []).length;
console.log('{', counts(/{/g), '}', counts(/}/g));
console.log('[', counts(/\[/g), ']', counts(/\]/g));
console.log('`', counts(/`/g));
console.log("'", counts(/'/g));
console.log('"', counts(/\"/g));
