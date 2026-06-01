const fs = require('fs');
const path = require('path');

const toolsDir = path.join('c:', 'projects', 'alvion-next', 'src', 'app', 'financial-tools');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
            processDirectory(filePath);
        } else if (file.endsWith('.tsx')) {
            processFile(filePath);
        }
    }
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Regex looks for setX(e.target.value)
    // We skip setCalcType explicitly
    const regex = /(set[A-Za-z0-9_]+)\(e\.target\.value\)/g;
    
    const newContent = content.replace(regex, (match, setter) => {
        if (setter === 'setCalcType') {
            return match;
        }
        return `${setter}(Number(e.target.value))`;
    });
    
    if (newContent !== content) {
        fs.writeFileSync(filePath, newContent, 'utf-8');
        console.log(`Fixed ${filePath}`);
    }
}

processDirectory(toolsDir);
console.log("Done fixing TypeScript errors!");
