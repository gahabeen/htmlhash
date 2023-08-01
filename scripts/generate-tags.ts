import fs from 'fs'
import path from 'path'
import tags from './input/tags.json'

const predicatesFolder = path.join(__dirname, '../src/hashing/predicates')

for (const tag of tags) {
    const filePath = path.join(predicatesFolder, `tag-${tag}.ts`)
    // if (fs.existsSync(filePath)) continue;

    fs.writeFileSync(
        filePath,
        `import { matchSelector } from '../matchers';

export const predicate = matchSelector('${tag}')`
    )
}
