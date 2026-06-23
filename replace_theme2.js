const fs = require('fs');

const files = [
    "c:\\projects\\alvion-next\\src\\app\\services\\healthcare\\carefirst\\page.tsx",
    "c:\\projects\\alvion-next\\src\\components\\CaseStudyDarkSparklineTemplate.tsx"
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/bg-white border border-slate-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full/g, 'bg-blue-50 border border-blue-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full');
    fs.writeFileSync(file, content, 'utf8');
});
console.log("Theme updated to light blue.");
