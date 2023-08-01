import fs from 'fs'
import path from 'path'
import meta from './input/meta.json'

const predicatesFolder = path.join(__dirname, '../src/hashing/predicates')

for (const [key, value] of Object.entries(meta)) {
    const filePath = path.join(predicatesFolder, `meta-${key}.ts`)

    fs.writeFileSync(
        filePath,
        `import { matchTagAttributesFuzzy } from "../matchers";

export const predicate = matchTagAttributesFuzzy("meta", ${JSON.stringify(value)});`
    )
}
