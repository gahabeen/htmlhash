import fs from 'fs'
import path from 'path'
import languages from './input/languages.json'

const predicatesFolder = path.join(__dirname, '../src/hashing/predicates')

for (const language of Object.keys(languages)) {
    const filePath = path.join(predicatesFolder, `tag-html-lang-${language}.ts`)
    // if (fs.existsSync(filePath)) continue;

    fs.writeFileSync(
        filePath,
        `import { matchSelector } from "../matchers";

export const predicate = matchSelector('html[lang="${language}"]');`
    )
}
