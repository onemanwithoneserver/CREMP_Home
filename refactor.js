const { Project, SyntaxKind } = require('ts-morph');
const path = require('path');
const fs = require('fs');

const project = new Project();
project.addSourceFilesAtPaths("src/Home/**/*.tsx");

const homeDir = path.join(__dirname, 'src', 'Home');
const folders = fs.readdirSync(homeDir).filter(f => fs.statSync(path.join(homeDir, f)).isDirectory());

folders.forEach(folder => {
  const folderPath = path.join(homeDir, folder);
  const desktopFile = project.getSourceFiles().find(s => s.getFilePath().includes(folder) && s.getBaseName().startsWith('Desktop'));
  const mobileFile = project.getSourceFiles().find(s => s.getFilePath().includes(folder) && s.getBaseName().startsWith('Mobile'));
  
  if (!desktopFile) return;

  const exportedArrays = [];
  const usedIcons = new Set();
  
  const varStatements = desktopFile.getVariableStatements();
  
  for (const varStmt of varStatements) {
    const decl = varStmt.getDeclarations()[0];
    if (decl && decl.getInitializer() && decl.getInitializer().getKind() === SyntaxKind.ArrayLiteralExpression) {
      exportedArrays.push({
        name: decl.getName(),
        text: varStmt.getText()
      });
      decl.forEachDescendant(node => {
        if (node.getKind() === SyntaxKind.Identifier) {
           const name = node.getText();
           if (name.match(/^[A-Z][a-zA-Z0-9]+$/)) {
              usedIcons.add(name);
           }
        }
      });
      varStmt.remove();
    }
  }

  if (exportedArrays.length > 0) {
    let dataContent = '';
    const lucideImport = desktopFile.getImportDeclaration('lucide-react');
    if (lucideImport) {
        const importedNames = lucideImport.getNamedImports().map(ni => ni.getName());
        const iconsToImport = importedNames.filter(name => usedIcons.has(name));
        if (iconsToImport.length > 0) {
           dataContent += `import { ${iconsToImport.join(', ')} } from 'lucide-react';\n\n`;
        }
    }

    dataContent += exportedArrays.map(ea => ea.text.replace('const ', 'export const ')).join('\n\n');
    
    const dataFilePath = path.join(folderPath, 'data.ts');
    fs.writeFileSync(dataFilePath, dataContent);
    project.addSourceFileAtPath(dataFilePath);

    desktopFile.addImportDeclaration({
      namedImports: exportedArrays.map(ea => ea.name),
      moduleSpecifier: './data'
    });

    if (mobileFile) {
        const mobileVarStmts = mobileFile.getVariableStatements();
        for (const mStmt of mobileVarStmts) {
            const decl = mStmt.getDeclarations()[0];
            if (decl && decl.getInitializer() && decl.getInitializer().getKind() === SyntaxKind.ArrayLiteralExpression) {
                mStmt.remove();
            }
        }
        
        mobileFile.addImportDeclaration({
            namedImports: exportedArrays.map(ea => ea.name),
            moduleSpecifier: './data'
        });
    }
  }
  
  desktopFile.organizeImports();
  if (mobileFile) mobileFile.organizeImports();
});

project.saveSync();

// Now remove comments manually from all .tsx files in src/Home
function removeComments(dir) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
        const itemPath = path.join(dir, item);
        if (fs.statSync(itemPath).isDirectory()) {
            removeComments(itemPath);
        } else if (itemPath.endsWith('.tsx') || itemPath.endsWith('.ts')) {
            let content = fs.readFileSync(itemPath, 'utf8');
            // Remove JSX comments
            content = content.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
            // Remove standard multi-line comments (if any)
            content = content.replace(/\/\*[\s\S]*?\*\//g, '');
            // Remove single line comments (but not https://)
            content = content.replace(/(?<!:)\/\/.*$/gm, '');
            
            // Clean up empty lines created by comment removal
            content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
            fs.writeFileSync(itemPath, content);
        }
    }
}

removeComments(homeDir);

console.log("Done refactoring and removing comments.");
