const fs = require('fs');
const content = fs.readFileSync('C:/Users/premn/.gemini/antigravity-ide/brain/1734ed74-b19b-49e0-ba10-1d0dd623989d/.system_generated/steps/350/content.md', 'utf8');

const regex = />([^<]{10,})</g;
const matches = [];
let m;
while ((m = regex.exec(content)) !== null) {
  let t = m[1].trim();
  if (t.length > 10 && !t.includes('{') && !t.includes('}')) {
    matches.push(t);
  }
}
console.log([...new Set(matches)].join('\n---\n'));
