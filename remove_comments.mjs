import fs from 'fs';
import path from 'path';

function removeComments(text) {
    // 1. Remove JSX comments: {/* comment */}
    text = text.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
    
    // 2. Remove block comments: /* comment */
    text = text.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // 3. Remove single line comments: // comment
    // We want to avoid replacing // in URLs.
    // We only match // if it's at the start of a line or after whitespace.
    text = text.replace(/(^|\s)\/\/.*$/gm, '$1');
    
    // Clean up multiple empty lines
    text = text.replace(/\n\s*\n\s*\n/g, '\n\n');
    return text;
}

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (/\.(ts|tsx|js|jsx)$/.test(file)) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let newContent = removeComments(content);
            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent, 'utf8');
            }
        }
    }
}

processDirectory('./src');
console.log('Comments removed.');
