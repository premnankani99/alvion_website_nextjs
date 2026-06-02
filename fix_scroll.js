const fs = require('fs');
const path = require('path');

const dir = 'c:/projects/alvion-next/src/app';
const items = fs.readdirSync(dir, { withFileTypes: true });

items.forEach(item => {
  if (item.isDirectory()) {
    const pagePath = path.join(dir, item.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const ignore = ['services', 'contact', 'careers', 'api', 'about'];
      if (ignore.includes(item.name)) return;
      
      let content = fs.readFileSync(pagePath, 'utf8');
      let original = content;
      
      content = content.replace(/<section id="([^"]+)" className="mb-12">/g, '<section id="$1" className="scroll-mt-32 mb-12">');
      content = content.replace(/<section id="([^"]+)">/g, '<section id="$1" className="scroll-mt-32">');
      
      if(original !== content) {
        fs.writeFileSync(pagePath, content);
        console.log('Updated', pagePath);
      }
    }
  }
});
