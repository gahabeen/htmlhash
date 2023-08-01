import fs from 'fs'
import path from 'path'
import roles from './input/roles.json'

const predicatesFolder = path.join(__dirname, '../src/hashing/predicates')

for (const role of roles) {
    const filePath = path.join(predicatesFolder, `attr-role-${role.replace(/\s+/, '-')}.ts`)
    // if (fs.existsSync(filePath)) continue;

    fs.writeFileSync(
        filePath,
        `import { matchSelector } from '../matchers'

export const predicate = matchSelector('[role*="${role}"]')
        `
    )
}
