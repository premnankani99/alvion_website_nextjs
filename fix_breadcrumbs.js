const fs = require('fs');
const path = require('path');

const dir = 'c:/projects/alvion-next/src/app';
const items = fs.readdirSync(dir, { withFileTypes: true });

const replacement = `        {/* Back Button */}
        <div className="container mx-auto px-6 md:px-12 py-6">
          <button onClick={() => window.history.back()} className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-[#1e3a8a] transition-colors uppercase tracking-widest cursor-pointer">
            &larr; Back
          </button>
        </div>`;

items.forEach(item => {
  if (item.isDirectory()) {
    const pagePath = path.join(dir, item.name, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      const ignore = ['services', 'contact', 'careers', 'api', 'about'];
      if (ignore.includes(item.name)) return;
      
      let content = fs.readFileSync(pagePath, 'utf8');
      let original = content;
      
      // We only want to replace it in the case study pages, which have the Breadcrumb
      if (content.includes('{/* Breadcrumb */}')) {
         content = content.replace(/\{\/\* Breadcrumb \*\/\}[\s\S]*?<\/div>/, replacement);
      }
      
      if(original !== content) {
        fs.writeFileSync(pagePath, content);
        console.log('Updated', pagePath);
      }
    }
  }
});
