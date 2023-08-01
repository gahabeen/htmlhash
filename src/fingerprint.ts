import { parse } from 'node-html-parser'
import { COMPRESS_CHAR_AS_MULTIPLIERS, HEX_CHARACTERS } from './consts'
import digits from './hashing/digits'
import names from './hashing/names'
import { AnyHash, Hash, HashBinaryArray, HashHex, HashShortHex, Predicate } from './types'
import { binaryToHex, compressHex, decompressHex, hammingDistanceScore, hexToBinary } from './utils'

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

export const isCompressedHex = (hash: AnyHash) => {
    if (typeof hash !== 'string') return false
    return Array.from(hash).some((char) => COMPRESS_CHAR_AS_MULTIPLIERS.includes(char))
}

export const isHex = (hash: AnyHash) => {
    if (typeof hash !== 'string') return false
    return Array.from(hash).every((char) => HEX_CHARACTERS.includes(char))
}

export const isBinaryString = (hash: AnyHash) => {
    if (typeof hash !== 'string') return false
    return Array.from(hash).every((char) => ['0', '1'].includes(char))
}

export const toBinary = (hash: AnyHash): Hash => {
    if (isBinaryString(hash)) return hash as Hash;
    const hex = isCompressedHex(hash) ? decompressHex(hash as HashShortHex) : hash
    const bin = hexToBinary(hex as HashHex)
    return bin
}

export const toHex = (hash: AnyHash): HashHex => {
    const isCompressed = isCompressedHex(hash)
    const isBin = isBinaryString(hash)

    if (!isCompressed && !isBin) throw new Error(`No conversion available for ${hash}`)
    return isCompressed ? decompressHex(hash as HashShortHex) : binaryToHex(hash as Hash)
}

export const toBinaryArray = (hexOrShort: AnyHash): HashBinaryArray => {
    const bin = toBinary(hexOrShort);
    return Array.from(bin).map((char) => +(char)) as HashBinaryArray;
}

export const similarity = (hash1: AnyHash, hash2: AnyHash, weights: number[] = []) => {
    const bin1 = toBinaryArray(hash1)
    const bin2 = toBinaryArray(hash2)

    return hammingDistanceScore(bin1, bin2, weights)
}

export const compare = (hash1: AnyHash, hash2: AnyHash) => {
    const bin1 = toBinaryArray(hash1)
    const bin2 = toBinaryArray(hash2)

    const length = Math.min(bin1.length, bin2.length);
    let common = [];
    let difference = [];

    for (let i = 0; i < length; i++) {
        if (bin1[i] === bin2[i]) {
            common.push(1);
            difference.push(0);
        } else {
            common.push(0);
            difference.push(1);
        }
    }

    return { common, difference };
}

// export const differences = (hash1: string, hash2: string) => {
//     const differentIndexes = []
//     const bin1 = toBinaryArray(hash1)
//     const bin2 = toBinaryArray(hash2)

//     for (const [index, char] of Object.entries(bin1)) {
//         if (!(+index in bin2)) break
//         if (char !== bin2[+index]) differentIndexes.push(+index)
//     }

//     return differentIndexes.map((index) => names[index])
// }
