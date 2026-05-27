const fs = require('fs');

const data = fs.readFileSync('C:/Users/premn/.gemini/antigravity-ide/brain/55249186-c059-4fbd-983a-f1e7689a6c60/.system_generated/steps/619/content.md', 'utf-8');

const regex = /"name":\[0,"(Day \d+[^"]+)"\]/g;
let match;
const days = [];

while ((match = regex.exec(data)) !== null) {
  days.push(match[1]);
}

if (days.length > 0) {
  console.log(days.join('\n'));
} else {
  console.log("No matches found.");
}
