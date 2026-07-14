const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const tailwindConfig = path.join(__dirname, 'tailwind.config.js');

const colorMap = {
  // Hex replacements (case-insensitive)
  '#0B1628': '#2A3A69',
  '#0b1628': '#2A3A69',
  '#081020': '#1F2A4A',
  '#081020': '#1F2A4A',
  '#D4961A': '#C79A17',
  '#d4961a': '#C79A17',
  '#E8AA22': '#D7B73F',
  '#e8aa22': '#D7B73F',
  '#b38728': '#B17D16',
  '#B38728': '#B17D16',
  '#5548D9': '#6B82B5',
  '#5548d9': '#6B82B5',
  '#6655EE': '#829AC5',
  '#6655ee': '#829AC5',

  // RGB replacements in index.css and some inline rgba
  '11 22 40': '42 58 105',
  '8 16 32': '31 42 74',
  '212 150 26': '199 154 23',
  '232 170 34': '215 183 63',
  '85 72 217': '107 130 181',
  '102 85 238': '130 154 197',
  
  // Specific rgb comma formats if they exist
  'rgba(212, 150, 26,': 'rgba(199, 154, 23,',
  'rgba(212,150,26,': 'rgba(199,154,23,',
  'rgba(85, 72, 217,': 'rgba(107, 130, 181,',
  'rgba(85,72,217,': 'rgba(107,130,181,',
};

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [oldColor, newColor] of Object.entries(colorMap)) {
    if (content.includes(oldColor)) {
      content = content.split(oldColor).join(newColor);
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
    } else if (
      fullPath.endsWith('.tsx') || 
      fullPath.endsWith('.ts') || 
      fullPath.endsWith('.css')
    ) {
      processFile(fullPath);
    }
  }
}

// Process all files in src
walkDir(srcDir);

// Process tailwind config
processFile(tailwindConfig);

console.log('Color update complete.');
