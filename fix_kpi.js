const fs = require('fs');
const path = require('path');

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (fullPath.endsWith('page.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            content = content.replace(/value:\s*"([^"]+)",\s*trend:\s*"([^"]+)",/g, (match, val, trend) => {
                if (val === trend) {
                    modified = true;
                    let newVal = '2.5x';
                    if (val === '60%' || val === '65%' || val === '75%') newVal = '15 Mins';
                    else if (val === '45%' || val === '50%' || val === '40%') newVal = '1.2 Hrs';
                    else if (val === '100%' || val === '99%') newVal = '24/7';
                    else if (val === '32%' || val === '28%') newVal = '10K+';
                    else if (val === '70%') newVal = '5K+';
                    else newVal = '2.5x';
                    return `value: "${newVal}",\n        trend: "${trend}",`;
                }
                return match;
            });

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Modified:', fullPath);
            }
        }
    }
}

processDir('C:/projects/alvion-next/src/app');
