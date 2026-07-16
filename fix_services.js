const fs = require('fs');
const path = require('path');

const servicesDir = path.join('C:', 'projects', 'alvion-next', 'src', 'app', 'services');

const directories = ['intelligent-automation', 'development-and-implementation', 'application-and-infra-support', 'training', 'quality-engineering-and-assurance', 'consulting', 'banking', 'insurance', 'governance', 'retail', 'real-estate', 'healthcare'];

for (const dir of directories) {
    const filePath = path.join(servicesDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Replace Intro H2
        content = content.replace(/text-\[28px\] font-bold text-\[#1a233a\] mb-6/g, 'text-3xl md:text-4xl font-bold text-[#1a233a] mb-6');
        
        // Replace Intro paragraphs
        content = content.replace(/text-\[#555\] text-base leading-relaxed/g, 'text-zinc-600 text-base md:text-lg leading-relaxed');

        // Replace H3s (Industries We Serve)
        content = content.replace(/text-xl font-bold text-\[#1a233a\] mb-4/g, 'text-2xl md:text-3xl font-bold text-[#1a233a] mb-6');

        // Replace H3s (Business Impact, Why Choose Us, FAQs)
        content = content.replace(/text-xl font-bold text-\[#1a233a\] mb-6/g, 'text-2xl md:text-3xl font-bold text-[#1a233a] mb-8');

        // Replace Industries UL
        content = content.replace(/<ul className="space-y-2 text-\[#555\] text-base">/g, '<ul className="list-disc pl-6 space-y-3 text-zinc-600 text-base md:text-lg mt-4 marker:text-blue-500">');
        
        // Replace Business Impact Number
        content = content.replace(/text-3xl font-bold text-\[#1c5fba\] mb-2/g, 'text-4xl md:text-5xl font-bold text-[#1c5fba] mb-4');

        // Replace Business Impact Text
        content = content.replace(/text-sm text-\[#555\]/g, 'text-base md:text-lg text-zinc-600 font-medium');

        // Replace Why Choose Us Card Heading
        content = content.replace(/font-bold text-\[#1a233a\] text-sm mb-3/g, 'text-xl font-bold text-[#1a233a] mb-4');

        // Replace Why Choose Us Card Text
        content = content.replace(/text-sm text-\[#666\] leading-relaxed/g, 'text-base text-zinc-600 leading-relaxed');

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Updated ${dir}/page.tsx`);
    }
}
