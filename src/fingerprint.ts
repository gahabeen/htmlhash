import { parse } from 'node-html-parser'
import { COMPRESS_CHAR_AS_MULTIPLIERS, HEX_CHARACTERS } from './consts'
import digits from './hashing/digits'
import names from './hashing/names'
import { Predicate } from './types'
import { binaryToHex, compressHex, decompressHex, hammingDistanceScore, hexToBinary } from './utils'

export const runPredicateAsBinary = (html: string, predicates: Predicate[]) => {
    const dom = parse(html)
    return predicates.map((predicate, index) => {
        // console.time('predicate')
        // console.log(`Running predicate ${names[index]}`)
        const exist = predicate({ html, dom });
        // console.timeEnd('predicate')
        return exist ? 1 : 0;
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

export const isCompressedHex = (hash: string) => {
    return Array.from(hash).some((char) => COMPRESS_CHAR_AS_MULTIPLIERS.includes(char))
}

export const isHex = (hash: string) => {
    return Array.from(hash).every((char) => HEX_CHARACTERS.includes(char))
}

export const isBinary = (hash: string) => {
    return Array.from(hash).every((char) => ['0', '1'].includes(char))
}

export const toBinary = (hash: string) => {
    if(isBinary(hash)) return hash
    const hex = isCompressedHex(hash) ? decompressHex(hash) : hash
    const bin = hexToBinary(hex)
    return bin
}

export const toHex = (hash: string) => {
    const isCompressed = isCompressedHex(hash)
    const isBin = isBinary(hash)

    if (!isCompressed && !isBin) throw new Error(`No conversion available for ${hash}`)
    return isCompressed ? decompressHex(hash) : binaryToHex(hash)
}

export const toBinaryArray = (hexOrShort: string) => {
    const bin = toBinary(hexOrShort)
    return Array.from(bin).map((char) => +char)
}

export const similarity = (hash1: string, hash2: string) => {
    const bin1 = toBinaryArray(hash1)
    const bin2 = toBinaryArray(hash2)

    return hammingDistanceScore(bin1, bin2)
}

export const differences = (hash1: string, hash2: string) => {
    const differentIndexes = []
    const bin1 = toBinaryArray(hash1)
    const bin2 = toBinaryArray(hash2)

    for (const [index, char] of Object.entries(bin1)) {
        if (!(+index in bin2)) break
        if (char !== bin2[+index]) differentIndexes.push(+index)
    }

    return differentIndexes.map((index) => names[index])
}