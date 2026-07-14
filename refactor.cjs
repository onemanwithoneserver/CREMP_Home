const { Project } = require('ts-morph');
const fs = require('fs');
const path = require('path');

async function run() {
    const project = new Project();
    project.addSourceFilesAtPaths("src/**/*.tsx");
    project.addSourceFilesAtPaths("src/**/*.ts");

    function processFolder(folderPath, outFileName) {
        const files = project.getSourceFiles().filter(f => f.getFilePath().replace(/\\/g, '/').includes(folderPath) && !f.getFilePath().endsWith('index.tsx'));
        
        if (files.length === 0) return;

        // Rename internal declarations to avoid collisions when merged
        for (const file of files) {
            const baseName = file.getBaseNameWithoutExtension();
            
            for (const varStatement of file.getVariableStatements()) {
                if (!varStatement.isExported()) {
                    for (const dec of varStatement.getDeclarations()) {
                        dec.rename(`${baseName}_${dec.getName()}`);
                    }
                }
            }
            
            for (const typeAlias of file.getTypeAliases()) {
                if (!typeAlias.isExported()) {
                    typeAlias.rename(`${baseName}_${typeAlias.getName()}`);
                }
            }
            
            for (const intf of file.getInterfaces()) {
                if (!intf.isExported()) {
                    intf.rename(`${baseName}_${intf.getName()}`);
                }
            }
            
            for (const func of file.getFunctions()) {
                if (!func.isExported() && func.getName()) {
                    func.rename(`${baseName}_${func.getName()}`);
                }
            }
        }

        const outFile = project.createSourceFile(path.join(process.cwd(), outFileName), "", { overwrite: true });

        for (const file of files) {
            for (const imp of file.getImportDeclarations()) {
                const specifier = imp.getModuleSpecifierValue();
                if (specifier.startsWith('./') || specifier.startsWith('../')) {
                    const importedFilePath = imp.getModuleSpecifierSourceFile()?.getFilePath()?.replace(/\\/g, '/');
                    if (importedFilePath && importedFilePath.includes(folderPath)) {
                        continue;
                    }
                }
                outFile.addImportDeclaration(imp.getStructure());
            }

            for (const statement of file.getStatements()) {
                if (statement.getKindName() === 'ImportDeclaration') continue;
                
                let text = statement.getText();
                if (text.startsWith('export default function')) {
                    text = text.replace('export default function', 'export function');
                } else if (text.startsWith('export default const')) {
                    text = text.replace('export default const', 'export const');
                } else if (text.startsWith('export default ')) {
                    const id = text.replace('export default ', '').replace(';', '').trim();
                    text = `export { ${id} };`;
                }
                
                outFile.addStatements(text);
            }
        }

        outFile.organizeImports();
        outFile.saveSync();

        for (const file of files) {
            fs.unlinkSync(file.getFilePath());
            project.removeSourceFile(file);
        }
    }

    processFolder('/components/layout/', 'src/components/layout/index.tsx');
    processFolder('/components/ui/', 'src/components/ui/index.tsx');

    // Update imports in all other files
    const allFiles = project.getSourceFiles();

    for (const file of allFiles) {
        const filePath = file.getFilePath().replace(/\\/g, '/');
        if (filePath.includes('/components/layout/index.tsx') || filePath.includes('/components/ui/index.tsx')) {
            continue;
        }

        let changed = false;

        for (const imp of file.getImportDeclarations()) {
            const moduleSpecifier = imp.getModuleSpecifierValue();
            
            if (moduleSpecifier.includes('components/layout') && !moduleSpecifier.endsWith('components/layout')) {
                const componentName = imp.getDefaultImport() ? imp.getDefaultImport().getText() : null;
                if (componentName) {
                    imp.removeDefaultImport();
                    imp.addNamedImport(componentName);
                    const lastSlash = moduleSpecifier.lastIndexOf('/layout');
                    imp.setModuleSpecifier(moduleSpecifier.substring(0, lastSlash + 7));
                    changed = true;
                }
            }
            
            if (moduleSpecifier.includes('components/ui') && !moduleSpecifier.endsWith('components/ui')) {
                const componentName = imp.getDefaultImport() ? imp.getDefaultImport().getText() : null;
                if (componentName) {
                    imp.removeDefaultImport();
                    imp.addNamedImport(componentName);
                    const lastSlash = moduleSpecifier.lastIndexOf('/ui');
                    imp.setModuleSpecifier(moduleSpecifier.substring(0, lastSlash + 3));
                    changed = true;
                }
            }
        }

        if (changed) {
            file.organizeImports();
            file.saveSync();
        }
    }

    console.log("Refactoring complete.");
}

run().catch(console.error);
