import fs from 'fs'
import path from 'path'
import js from './input/js.json'

const predicatesFolder = path.join(__dirname, '../src/hashing/predicates')

for (const [key, value] of Object.entries(js)) {
    const filePath = path.join(predicatesFolder, `js-${key}.ts`)

    fs.writeFileSync(
        filePath,
        `import { matchJavascript } from "../matchers";

export const predicate = matchJavascript('${value}');`
    )
}
