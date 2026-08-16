const fs = require('fs');
const path = require('path');

const foldersToFix = ['BuildingBox', 'LandBox'];
const components = ['02.CommercialTerms', '03.SpaceOverview', '04.FitOut', '05.Infrastructure'];
const fileTypes = ['desktop.tsx', 'mobile.tsx'];

// The new polished styles we want
const polishedCardStyle = 'className="flex items-center gap-3 p-3.5 rounded-[8px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-gray-200 transition-all duration-300 group cursor-default"';
const polishedInfraStyle = 'className="flex items-center justify-between p-3.5 rounded-[8px] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] border border-gray-100 hover:border-gray-200 transition-all duration-300 group cursor-default"';

for (const box of foldersToFix) {
    for (const comp of components) {
        for (const type of fileTypes) {
            const p = path.join('src', box, comp, type);
            if (fs.existsSync(p)) {
                let content = fs.readFileSync(p, 'utf8');
                
                // Replace #0a1128 with #17274c
                content = content.replace(/#0a1128/g, '#17274c');
                
                // Replace font-bold with font-semibold (mostly mobile)
                content = content.replace(/font-bold/g, 'font-semibold');
                
                // Replace truncate with leading-tight (for mobile text cutoff)
                if (type === 'mobile.tsx') {
                    content = content.replace(/truncate/g, 'leading-tight');
                }
                
                // Replace card styling
                if (comp === '03.SpaceOverview' || comp === '04.FitOut') {
                    // Replace old style: className="flex items-center gap-3 p-3 rounded-[4px] bg-gray-50/50 border border-transparent hover:border-gray-300 transition-all duration-300 group cursor-default"
                    // Also some might have "border border-gray-100 hover:border-gray-300"
                    content = content.replace(/className="flex items-center gap-3 p-3.*?"/g, polishedCardStyle);
                }
                
                if (comp === '05.Infrastructure') {
                    // Replace old style: className="flex items-center justify-between p-3.5 rounded-[8px]  bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-300 group cursor-default"
                    content = content.replace(/className="flex items-center justify-between p-3.5.*?"/g, polishedInfraStyle);
                }
                
                fs.writeFileSync(p, content);
            }
        }
    }
}
