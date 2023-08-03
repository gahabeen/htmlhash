import { COMPRESS_CHAR_AS_MULTIPLIERS, HEX_CHARACTERS } from './consts'
import { AnyHash, Hash, HashBinaryArray, HashHex, HashShortHex } from './types'

export const getDimensionality = (hashes: any[]): number => {
    return Math.min(...hashes.map((hash) => hash.length))
}

export const escapeRegExpValue = function (value: string) {
    return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

export const binaryToHex = (bin: string) => {
    const hex = []
    for (let i = 0; i < bin.length; i += 4) {
        const chunk = bin.slice(i, i + 4)
        hex.push(parseInt(chunk, 2).toString(16))
    }
    return hex.join('')
}

export const hexToBinary = (hex: string) => {
    const bin = []
    for (const char of Array.from(hex)) {
        const chunk = parseInt(char, 16).toString(2).padStart(4, '0')
        bin.push(chunk)
    }
    return bin.join('')
}

// compress duplicated characters to short
export const compressHex = (hex: HashHex): HashShortHex => {
    let previousChar = hex[0]
    let charCount = 1
    let compressed = ''

    const maxCount = COMPRESS_CHAR_AS_MULTIPLIERS.length + 1

    for (const char of Array.from(hex).slice(1)) {
        // if we have reached the max count, reset the counter and add the compressed char
        if (charCount === maxCount) {
            compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`
            charCount = 0
        }

        if (previousChar === char) {
            charCount++
        } else {
            if (charCount > 1) {
                compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`
            } else {
                compressed += previousChar
            }
            previousChar = char
            charCount = 1
        }
    }

    if (charCount > 1) {
        compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`
    } else {
        compressed += previousChar
    }

    return compressed
}

export const decompressHex = (hex: HashShortHex): HashHex => {
    let decompressed = ''
    let previousWasMultiplier = false

    for (const [index, char] of Object.entries(Array.from(hex))) {
        if (previousWasMultiplier) {
            previousWasMultiplier = false
            continue
        }

        if (COMPRESS_CHAR_AS_MULTIPLIERS.includes(char)) {
            previousWasMultiplier = true
            const count = COMPRESS_CHAR_AS_MULTIPLIERS.indexOf(char) + 2
            decompressed += hex.charAt(+index + 1).repeat(count)
        } else {
            decompressed += char
        }
    }

    return decompressed
}

export function dotProduct(a: number[], b: number[]): number {
    return a.reduce((sum, value, index) => sum + value * b[index], 0)
}

export function vectorMagnitude(a: number[]): number {
    return Math.sqrt(a.reduce((sum, value) => sum + value * value, 0))
}

export function cosineSimilarity(a: number[], b: number[]): number {
    const dotProd = dotProduct(a, b)
    const magnitudeA = vectorMagnitude(a)
    const magnitudeB = vectorMagnitude(b)
    return dotProd / (magnitudeA * magnitudeB)
}

export const hammingDistance = (a: number[], b: number[]) => {
    let distance = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            distance++;
        }
    }
    return distance;
}

export const log = (value: number) => {
    return Math.log2(value + 1)
};


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

export const isBinaryArray = (hash: AnyHash) => {
    if (!Array.isArray(hash)) return false
    return hash.every((char) => [0, 1].includes(char))
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

export const toBinaryArray = (hash: AnyHash): HashBinaryArray => {
    if (isBinaryArray(hash)) return hash as HashBinaryArray;
    const bin = toBinary(hash);
    return Array.from(bin).map((char) => +(char)) as HashBinaryArray;
}

// export const hammingDistanceScore = (vectorA = [] as number[], vectorB = [] as number[]) => {
//     const dimensionality = Math.min(vectorA.length, vectorB.length)
//     let score = 0

//     for (let i = 0; i < dimensionality; i++) {
//         if (vectorA[i] === vectorB[i]) score++
//     }

//     return score / dimensionality
// }
