import fs from 'fs';
import path from 'path';
import itemprops from './input/itemprops.json';

const predicatesFolder = path.join(__dirname, '../src/predicates');

for (const itemprop of itemprops) {
  const filePath = path.join(predicatesFolder, `attr-itemprop-${itemprop}.ts`);
  if (fs.existsSync(filePath)) continue;

  fs.writeFileSync(filePath, `import { matchAny } from '../fp';
  import { tagKeyValuePattern } from '../patterns';

  export const predicate = matchAny([
    tagKeyValuePattern('itemprop', '${itemprop}', 'gm'),
  ])`);
}