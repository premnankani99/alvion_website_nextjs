const fs = require('fs');
const path = require('path');

const servicesDir = path.join('C:', 'projects', 'alvion-next', 'src', 'app', 'services');

const directories = ['intelligent-automation', 'development-and-implementation', 'application-and-infra-support', 'training', 'quality-engineering-and-assurance', 'consulting', 'banking', 'insurance', 'governance', 'retail', 'real-estate', 'healthcare'];

for (const dir of directories) {
    const filePath = path.join(servicesDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Scale down Intro H2
        content = content.replace(/text-3xl md:text-4xl font-bold text-\[#1a233a\] mb-6/g, 'text-2xl md:text-3xl font-bold text-[#1a233a] mb-5');
        
        // Scale down Intro paragraphs
        content = content.replace(/text-zinc-600 text-base md:text-lg leading-relaxed/g, 'text-zinc-600 text-[15px] md:text-base leading-relaxed');

        // Scale down H3s (Industries We Serve)
        content = content.replace(/text-2xl md:text-3xl font-bold text-\[#1a233a\] mb-6/g, 'text-xl md:text-2xl font-bold text-[#1a233a] mb-4');

        // Scale down H3s (Business Impact, Why Choose Us, FAQs)
        content = content.replace(/text-2xl md:text-3xl font-bold text-\[#1a233a\] mb-8/g, 'text-xl md:text-2xl font-bold text-[#1a233a] mb-6');

        // Scale down Industries UL
        content = content.replace(/text-zinc-600 text-base md:text-lg mt-4 marker:text-blue-500/g, 'text-zinc-600 text-[15px] md:text-base mt-3 marker:text-blue-500');
        
        // Scale down Business Impact Number
        content = content.replace(/text-4xl md:text-5xl font-bold text-\[#1c5fba\] mb-4/g, 'text-3xl md:text-4xl font-bold text-[#1c5fba] mb-2');

        // Scale down Business Impact Text
        content = content.replace(/text-base md:text-lg text-zinc-600 font-medium/g, 'text-sm md:text-[15px] text-zinc-600 font-medium');

        // Scale down Why Choose Us Card Heading
        content = content.replace(/text-xl font-bold text-\[#1a233a\] mb-4/g, 'text-[17px] md:text-lg font-bold text-[#1a233a] mb-3');

        // Scale down Why Choose Us Card Text
        content = content.replace(/text-base text-zinc-600 leading-relaxed/g, 'text-sm md:text-[15px] text-zinc-600 leading-relaxed');

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Scaled down ${dir}/page.tsx`);
    }
}
