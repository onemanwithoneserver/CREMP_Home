const fs = require('fs');
const files = [
  'src/explore/data.ts',
  'src/LandBox/06.Media/data.ts',
  'src/BuildingBox/06.Media/data.ts'
];
files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    // Remove brand, duration, views properties from VideoResult interface
    content = content.replace(/\s*brand:\s*string;/g, '');
    content = content.replace(/\s*duration:\s*string;/g, '');
    content = content.replace(/\s*views:\s*string;/g, '');
    
    // Remove brand, duration, views from object literals
    content = content.replace(/\s*brand:\s*['"`].*?['"`],?/g, '');
    content = content.replace(/\s*duration:\s*['"`].*?['"`],?/g, '');
    content = content.replace(/\s*views:\s*['"`].*?['"`],?/g, '');
    
    fs.writeFileSync(file, content);
    console.log('Updated ' + file);
  }
});
