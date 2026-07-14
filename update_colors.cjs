const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Color mapping: old hex to new hex
const colorMap = {
  // Golds
  '#b38728': '#D4961A',
  '#d4af37': '#D4961A',
  '#bf953f': '#D4961A',
  '#fdf8f0': 'rgba(212, 150, 26, 0.05)',
  '#f6ead6': 'rgba(212, 150, 26, 0.15)',
  
  // Navys/Darks
  '#0a1128': '#0B1628',
  '#0B1426': '#0B1628',
  '#0f172a': '#0B1628',
  '#111827': '#0B1628',
  '#1e293b': '#081020',
  '#1c2a44': '#081020',
  '#334155': 'rgba(255, 255, 255, 0.1)',
  '#475569': 'rgba(255, 255, 255, 0.2)',
  '#030712': '#081020',

  // Purples
  '#3B1E54': '#5548D9',
  '#4f46e5': '#5548D9',
  '#9333ea': '#6655EE',
  '#818cf8': '#A599FF',
  '#c084fc': '#A599FF',

  // Texts
  '#4b5563': '#3A4566',
  '#6b7280': '#6B7491',
  '#9ca3af': '#6B7491',
  '#94a3b8': '#6B7491',
  '#64748b': '#6B7491',

  // Borders/Backgrounds
  '#e5e7eb': '#E2E6EE',
  '#f3f4f6': '#F5F7FA',
  '#f8fafc': '#F5F7FA',
  '#fdfdfd': '#ffffff',
  '#eef2f7': '#F5F7FA'
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    // Escape for regex and allow case-insensitive match for hex
    const regex = new RegExp(oldColor, 'gi');
    if (regex.test(content)) {
      content = content.replace(regex, newColor);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated colors in ${filePath}`);
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

walkDir(path.join(srcDir, 'Home'));
walkDir(path.join(srcDir, 'Franchise'));
walkDir(path.join(srcDir, 'components'));

console.log('Color replacement complete.');
