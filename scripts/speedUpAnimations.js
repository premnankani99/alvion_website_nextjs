const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, '../src');

function speedUpAnimations(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Halve the duration values
    let modified = content.replace(/duration:\s*([0-9.]+)/g, (match, p1) => {
        let val = parseFloat(p1);
        return `duration: ${Number((val * 0.4).toFixed(2))}`; // Make it 2.5x faster
    });

    // Halve the delay values
    modified = modified.replace(/delay:\s*([0-9.]+)/g, (match, p1) => {
        let val = parseFloat(p1);
        return `delay: ${Number((val * 0.4).toFixed(2))}`; // Make it 2.5x faster
    });
    
    // Some delays are like `service.delay * 0.5`. Regex above won't catch the variable properly if it's evaluated, 
    // but the regex looks for literal numbers after delay: which won't match `delay: service.delay * 0.5`.
    // Wait, regex above matches `delay: 0.5` but not `delay: stat.delay`. Let's refine.
    modified = modified.replace(/delay:\s*([a-zA-Z0-9_.]+\s*\*\s*[0-9.]+)/g, (match, p1) => {
        // e.g. delay: service.delay * 0.5
        let parts = p1.split('*');
        if (parts.length === 2) {
            let val = parseFloat(parts[1].trim());
            return `delay: ${parts[0].trim()} * ${Number((val * 0.4).toFixed(2))}`;
        }
        return match;
    });

    if (content !== modified) {
        fs.writeFileSync(filePath, modified, 'utf8');
        console.log(`Updated animations in: ${filePath}`);
    }
}

function traverseDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDirectory(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
            speedUpAnimations(fullPath);
        }
    }
}

console.log('Speeding up animations...');
traverseDirectory(directoryPath);
console.log('Done!');
