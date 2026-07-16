const fs = require('fs');
const path = require('path');

const servicesDir = path.join('C:', 'projects', 'alvion-next', 'src', 'app', 'services');

const directories = ['intelligent-automation', 'development-and-implementation', 'application-and-infra-support', 'training', 'quality-engineering-and-assurance', 'consulting', 'banking', 'insurance', 'governance', 'retail', 'real-estate', 'healthcare'];

for (const dir of directories) {
    const filePath = path.join(servicesDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf-8');

        // Increase left padding to move points towards the middle
        content = content.replace(
            /className="list-disc pl-6 space-y-3 text-zinc-600 text-\[15px\] md:text-base mt-3 marker:text-blue-500"/g, 
            'className="list-disc list-inside pl-4 md:pl-12 space-y-3 text-zinc-600 text-[15px] md:text-base mt-3 marker:text-blue-500"'
        );

        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`Centered list in ${dir}/page.tsx`);
    }
}
