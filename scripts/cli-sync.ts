import fs from 'fs'
import path from 'path'

const syncPredicates = () => {
    const digits = fs.readFileSync(path.join(__dirname, '../src/hashing/digits.ts'), 'utf8')
    const predicates = fs.readdirSync(path.join(__dirname, '../src/hashing/predicates'))

    const currentPredicatesCount = Array.from(digits.matchAll(/\/predicates\//gm)).length

    let nextImportsToInsert = `// Added on ${new Date().toISOString()}\n`
    let hasNewImports = false

    for (const predicate of predicates) {
        const name = predicate.split('.')[0]
        if (!digits.includes(`/predicates/${name}.js`)) {
            if (!hasNewImports) hasNewImports = true
            nextImportsToInsert += `  require('./predicates/${name}.js'),\n`
            console.log('Missing predicate:', name)
        }
    }

    const newPredicatesCount = Array.from(nextImportsToInsert.matchAll(/\/predicates\//gm)).length

    if (hasNewImports) {
        console.log(`Added ${newPredicatesCount} new predicates. Total predicates: ${currentPredicatesCount + newPredicatesCount}`)
        fs.writeFileSync(path.join(__dirname, '../src/hashing/digits.ts'), digits.replace(']', nextImportsToInsert + '\n]'))
    } else {
        console.log(`No new predicates. Total predicates: ${currentPredicatesCount}`)
    }
}

const syncNames = () => {
    const digits = fs.readFileSync(path.join(__dirname, '../src/hashing/digits.ts'), 'utf8')
    const names = digits.matchAll(/\/predicates\/(.*)\.js/g)
    fs.writeFileSync(
        path.join(__dirname, '../src/hashing/names.ts'),
        `export default [\n${Array.from(names)
            .map(([, name]) => `  '${name}',`)
            .join('\n')}\n];`
    )
}

try {
    syncPredicates()
    syncNames()
} catch (error) {
    console.error(error)
}
