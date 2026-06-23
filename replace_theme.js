const fs = require('fs');

const files = [
    "c:\\projects\\alvion-next\\src\\app\\services\\healthcare\\carefirst\\page.tsx",
    "c:\\projects\\alvion-next\\src\\components\\CaseStudyDarkSparklineTemplate.tsx"
];

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    content = content.replace(/bg-\[#0f172a\] rounded-xl p-5 flex justify-between items-center shadow-lg w-full/g, 'bg-white border border-slate-100 rounded-xl p-5 flex justify-between items-center shadow-sm w-full');
    
    content = content.replace(/flex items-center gap-2 text-slate-300 text-sm font-medium mb-1/g, 'flex items-center gap-2 text-slate-500 text-sm font-medium mb-1');
    
    content = content.replace(/text-3xl font-bold text-white mb-1/g, 'text-3xl font-bold text-slate-800 mb-1');
    
    content = content.replace(/text-emerald-400 text-sm font-bold flex items-center gap-1/g, 'text-emerald-500 text-sm font-bold flex items-center gap-1');
    
    fs.writeFileSync(file, content, 'utf8');
});

console.log("Theme updated to light.");
