const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'Home');

// Padding mapping to reduce spacing
const paddingMap = {
  'pt-24 pb-24': 'pt-16 pb-16',
  'pt-16 pb-16': 'pt-10 pb-10',
  'pb-24': 'pb-16',
  'pb-16': 'pb-10',
  'pt-24': 'pt-16',
  'pt-16': 'pt-10',
  'pt-16 md:pt-24 pb-12 md:pb-20': 'pt-10 md:pt-16 pb-8 md:pb-12',
  'py-8 md:py-10': 'py-6 md:py-8',
  'pt-20 pb-16': 'pt-12 pb-10',
  'pt-12 md:pt-20 pb-8 md:pb-10': 'pt-8 md:pt-12 pb-6 md:pb-8'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldPad, newPad] of Object.entries(paddingMap)) {
    // Only replace if not part of another string (using simple replace all approach)
    if (content.includes(oldPad)) {
      content = content.split(oldPad).join(newPad);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated spacing in ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

walkDir(srcDir);

console.log('Spacing reduction complete.');
