const fs = require('fs');

function extract(file, name) {
    let content = fs.readFileSync(file, 'utf8');
    // Zyro stores data in <astro-island props="{...}">
    let propsMatch = content.match(/props="(.*?)" ssr client/);
    if(propsMatch) {
        let decoded = propsMatch[1].replace(/&quot;/g, '"').replace(/&amp;/g, '&');
        // Now it's a JSON string. Wait, there might be multiple astro-islands.
    }
    
    // Let's just find text values manually
    let regex = /"text":\[0,"([^"]+)"\]/g;
    let decoded = content.replace(/&quot;/g, '"');
    let match;
    let texts = [];
    while ((match = regex.exec(decoded)) !== null) {
        let t = match[1].replace(/\\n/g, ' ').trim();
        // remove HTML tags
        t = t.replace(/<[^>]+>/g, '');
        if (t.length > 20) {
            texts.push(t);
        }
    }
    console.log('\n=== ' + name + ' ===');
    let unique = [...new Set(texts)];
    unique.forEach(t => console.log('- ' + t));
}

extract('C:/Users/premn/.gemini/antigravity-ide/brain/55249186-c059-4fbd-983a-f1e7689a6c60/.system_generated/steps/2126/content.md', 'Intelligent Automation');
extract('C:/Users/premn/.gemini/antigravity-ide/brain/55249186-c059-4fbd-983a-f1e7689a6c60/.system_generated/steps/2127/content.md', 'Dev & Implementation');
extract('C:/Users/premn/.gemini/antigravity-ide/brain/55249186-c059-4fbd-983a-f1e7689a6c60/.system_generated/steps/2128/content.md', 'App & Infra Support');
