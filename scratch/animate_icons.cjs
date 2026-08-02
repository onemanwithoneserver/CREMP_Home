const fs = require('fs');
const path = require('path');

const dir = 'src/Franchise_Home';

function walk(directory) {
  let results = [];
  const list = fs.readdirSync(directory);
  list.forEach((file) => {
    file = path.join(directory, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') && !file.includes('01_HeroGallery')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk(dir);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  // Specifically target wrapper divs for icons that have background colors or act as buttons/boxes
  // Common patterns:
  // <div className="w-10 h-10 rounded-[4px] bg-white... flex items-center justify-center... "> <Icon ... /> </div>
  // We'll replace `<div className="... w-10 h-10 ... flex items-center ...">`
  
  const regex = /<div\s+className="([^"]*(?:w-[0-9]+|w-1\/2|w-1\/3)\s+(?:h-[0-9]+|h-full)[^"]*flex\s+items-center\s+justify-center[^"]*)"([^>]*)>(\s*)<([A-Z][a-zA-Z0-9]*|stat\.icon|feature\.icon|selected\.icon|item\.icon)\s+size=\{([0-9]+)\}/g;
  
  content = content.replace(regex, (match, className, rest, space, iconName, sizeStr) => {
    if (className.includes('bg-')) {
       let newClass = className;
       if (!newClass.includes('cursor-pointer')) {
           newClass += ' cursor-pointer';
       }
       return `<motion.div whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }} transition={{ duration: 0.3 }} className="${newClass}"${rest}>${space}<${iconName} size={${sizeStr}}`;
    }
    return match;
  });

  // Second pass: Replace matching closing tags for motion.div
  // Since regex can't easily match balanced tags, we'll do a simple split and reconstruct
  // Or we just add a marker, and then balance it.
  
  if (content !== originalContent) {
      // Ensure framer-motion is imported
      if (!content.includes('framer-motion')) {
          content = `import { motion } from "framer-motion";\n` + content;
      }
      
      // We have unbalanced `<motion.div` and `</div>`.
      // This is risky with regex. Let's do it manually for safety.
      console.log(`Needs manual update: ${file}`);
  }
}

