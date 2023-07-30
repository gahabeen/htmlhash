import fs from 'fs';
import path from 'path';

const digits = fs.readFileSync(path.join(__dirname, '../src/digits.ts'), 'utf8');
const predicates = fs.readdirSync(path.join(__dirname, '../src/predicates'));

let nextImportsToInsert = `// Added on ${new Date().toISOString()}\n`;
let hasNewImports = false;

for (const predicate of predicates) {
  const name = predicate.split('.')[0];
  if (!digits.includes(`/predicates/${name}.js`)) {
    if (!hasNewImports) hasNewImports = true;
    nextImportsToInsert += `  import('./predicates/${name}.js'),\n`;
    console.log('Missing predicate:', name);
  }
}

if (hasNewImports) {
  fs.writeFileSync(path.join(__dirname, '../src/digits.ts'), digits.replace(']);', nextImportsToInsert + '\n]);'));
}