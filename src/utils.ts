import { HashVector } from './types'

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

export const averageValue = (values: number[]) => {
    return values.reduce((acc, value) => acc + value, 0) / values.length;
}

// compress duplicated characters to short
// export const compressHex = (hex: HashHex): HashShortHex => {
//     let previousChar = hex[0]
//     let charCount = 1
//     let compressed = ''

//     const maxCount = COMPRESS_CHAR_AS_MULTIPLIERS.length + 1

//     for (const char of Array.from(hex).slice(1)) {
//         // if we have reached the max count, reset the counter and add the compressed char
//         if (charCount === maxCount) {
//             compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`
//             charCount = 0
//         }

//         if (previousChar === char) {
//             charCount++
//         } else {
//             if (charCount > 1) {
//                 compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`
//             } else {
//                 compressed += previousChar
//             }
//             previousChar = char
//             charCount = 1
//         }
//     }

//     if (charCount > 1) {
//         compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`
//     } else {
//         compressed += previousChar
//     }

//     return compressed
// }

// export const decompressHex = (hex: HashShortHex): HashHex => {
//     let decompressed = ''
//     let previousWasMultiplier = false

//     for (const [index, char] of Object.entries(Array.from(hex))) {
//         if (previousWasMultiplier) {
//             previousWasMultiplier = false
//             continue
//         }

//         if (COMPRESS_CHAR_AS_MULTIPLIERS.includes(char)) {
//             previousWasMultiplier = true
//             const count = COMPRESS_CHAR_AS_MULTIPLIERS.indexOf(char) + 2
//             decompressed += hex.charAt(+index + 1).repeat(count)
//         } else {
//             decompressed += char
//         }
//     }

//     return decompressed
// }

export function dotProduct(a: number[], b: number[]): number {
    return a.reduce((sum, value, index) => sum + value * b[index], 0)
}

export function vectorMagnitude(a: number[]): number {
    return Math.sqrt(a.reduce((sum, value) => sum + value * value, 0))
}

// Sørensen–Dice coefficient
// export function dice(a: HashBin, b: HashBin, weights?: number[]): number {
//     let a2 = 0;
//     let b2 = 0;
//     let prod2 = 0;
//     let dimensionality = Math.min(a.length, b.length);
//     for (let i = 0; i < dimensionality; i++) {
//         let weight = (weights?.[i] ?? 1);
//         let ai = +a[i] * weight;
//         let bi = +b[i] * weight;
//         a2 += ai * ai;
//         b2 += bi * bi;
//         prod2 += (ai - bi) * (ai - bi);
//     }
//     return prod2 / (a2 + b2);
// }

export type DiceValues = {
    squarredA?: number,
    squarredB?: number
}

// , values?: Partial<DiceValues>
export function dice(a: HashVector, b: HashVector): number {
    let squarredA = 0;
    let squarredB = 0;
    let prod2 = 0;
    let dimensionality = Math.min(a.length, b.length);
    for (let i = 0; i < dimensionality; i++) {
        squarredA += a[i] * a[i];
        squarredB += b[i] * b[i];
        prod2 += (a[i] - b[i]) * (a[i] - b[i]);
    }
    return prod2 / (squarredA + squarredB);
}

export function squarredSum(hash: HashVector): number {
    return hash.reduce((sum, nb) => sum + (+nb * +nb), 0);
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

export const toLogScale = (min: number, max: number, value: number) => {
    return log(value - min) - log(max - min);
}

export const toInvertLogScale = (min: number, max: number, value: number) => {
    return Math.pow(2, value + log(max - min)) + min - 1;
}

// export const isCompressedHex = (hash: HashVector) => {
//     if (typeof hash !== 'string') return false
//     return Array.from(hash).some((char) => COMPRESS_CHAR_AS_MULTIPLIERS.includes(char))
// }

// export const isHex = (hash: HashVector) => {
//     if (typeof hash !== 'string') return false
//     return Array.from(hash).every((char) => HEX_CHARACTERS.includes(char))
// }

// export const isBinaryString = (hash: HashVector) => {
//     if (typeof hash !== 'string') return false
//     return Array.from(hash).every((char) => ['0', '1'].includes(char))
// }

// export const isBinaryArray = (hash: HashVector) => {
//     if (!Array.isArray(hash)) return false
//     return hash.every((char) => [0, 1].includes(char))
// }

// export const toBinary = (hash: HashVector): Hash => {
//     if (isBinaryString(hash)) return hash as Hash;
//     const hex = isCompressedHex(hash) ? decompressHex(hash as HashShortHex) : hash
//     const bin = hexToBinary(hex as HashHex)
//     return bin
// }

// export const toHex = (hash: HashVector): HashHex => {
//     const isCompressed = isCompressedHex(hash)
//     const isBin = isBinaryString(hash)

//     if (!isCompressed && !isBin) throw new Error(`No conversion available for ${hash}`)
//     return isCompressed ? decompressHex(hash as HashShortHex) : binaryToHex(hash as Hash)
// }

// export const toBinaryArray = (hash: HashVector): HashNumberArray => {
//     if (isBinaryArray(hash)) return hash as HashNumberArray;
//     const bin = toBinary(hash);
//     return Array.from(bin).map((char) => +(char)) as HashNumberArray;
// }

// export const hammingDistanceScore = (vectorA = [] as number[], vectorB = [] as number[]) => {
//     const dimensionality = Math.min(vectorA.length, vectorB.length)
//     let score = 0

//     for (let i = 0; i < dimensionality; i++) {
//         if (vectorA[i] === vectorB[i]) score++
//     }

//     return score / dimensionality
// }
