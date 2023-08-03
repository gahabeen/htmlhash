import { parse } from 'node-html-parser'
import { Predicate } from '../types'
import { binaryToHex, compressHex } from '../utils'
import digits from './digits'

export const runPredicateAsBinary = (html: string, predicates: Predicate[]) => {
    const dom = parse(html)
    return predicates.map((predicate, index) => {
        // console.time('predicate')
        // console.log(`Running predicate ${names[index]}`)
        const exist = predicate({ html, dom })
        // console.timeEnd('predicate')
        return exist ? 1 : 0
    })
}

export const hash = (html: string, type: 'short' | 'hex' | 'bin' = 'bin') => {
    const predicates = digits.map((digit) => digit.predicate)
    const bin = runPredicateAsBinary(html, predicates).join('')
    if (type === 'bin') return bin

    const hex = binaryToHex(bin)
    if (type === 'hex') return hex

    const compressed = compressHex(hex)
    return compressed
}


// export const differences = (hashA: string, hashB: string) => {
//     const differentIndexes = []
//     const binA = toBinaryArray(hashA)
//     const binB = toBinaryArray(hashB)

//     for (const [index, char] of Object.entries(binA)) {
//         if (!(+index in binB)) break
//         if (char !== binB[+index]) differentIndexes.push(+index)
//     }

//     return differentIndexes.map((index) => names[index])
// }
