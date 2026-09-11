const fs = require('fs');
const path = require('path');

function processDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      processDir(full);
    } else if (full.endsWith('.tsx') || full.endsWith('.ts')) {
      let content = fs.readFileSync(full, 'utf8');
      
      let newContent = content
        .replace(/from "\.\.\/components/g, 'from "../../components')
        .replace(/from '\.\.\/components/g, 'from \'../../components')
        .replace(/from "\.\.\/\.\.\/components/g, 'from "../../../components')
        .replace(/from '\.\.\/\.\.\/components/g, 'from \'../../../components');
        
      if (content !== newContent) {
        fs.writeFileSync(full, newContent);
        console.log('Updated ' + full);
      }
    }
  });
}

processDir('src/Post Requirement/Buyer');
processDir('src/Post Requirement/Seller');
