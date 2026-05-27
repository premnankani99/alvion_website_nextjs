const fs = require('fs');

const data = fs.readFileSync('C:/Users/premn/.gemini/antigravity-ide/brain/55249186-c059-4fbd-983a-f1e7689a6c60/.system_generated/steps/619/content.md', 'utf-8');

// The JSON data is assigned somewhere or just embedded
const matches = data.match(/"name":\[0,"(Day \d+[^"]+)"\]/g);

if (matches) {
  matches.forEach(m => console.log(m));
} else {
  console.log("No matches found");
}
