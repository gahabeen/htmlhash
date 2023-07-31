import { COMPRESS_CHAR_AS_MULTIPLIERS } from './consts';

export const escapeRegExpValue = function (value: string) {
  // skip if value is a regex
  if (value.startsWith('/') && value.endsWith('/')) return value.slice(1, -1);

  return value.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

export const binaryToHex = (bin: string) => {
  const hex = [];
  for (let i = 0; i < bin.length; i += 4) {
    const chunk = bin.slice(i, i + 4);
    hex.push(parseInt(chunk, 2).toString(16));
  }
  return hex.join('');
};

export const hexToBinary = (hex: string) => {
  const bin = [];
  for (const char of Array.from(hex)) {
    const chunk = parseInt(char, 16).toString(2).padStart(4, '0');
    bin.push(chunk);
  }
  return bin.join('');
};

// compress duplicated characters to short
export const compressHex = (hex: string): string => {
  let previousChar = hex[0];
  let charCount = 1;
  let compressed = '';

  const maxCount = COMPRESS_CHAR_AS_MULTIPLIERS.length + 1;

  for (const char of Array.from(hex).slice(1)) {
    // if we have reached the max count, reset the counter and add the compressed char
    if (charCount === maxCount) {
      compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`;
      charCount = 0;
    }

    if (previousChar === char) {
      charCount++;
    } else {
      if (charCount > 1) {
        compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`;
      } else {
        compressed += previousChar;
      }
      previousChar = char;
      charCount = 1;
    }
  }

  if (charCount > 1) {
    compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 2]}${previousChar}`;
  } else {
    compressed += previousChar;
  }

  return compressed;
};

export const decompressHex = (hex: string): string => {
  let decompressed = '';
  let previousWasMultiplier = false;

  for (const [index, char] of Object.entries(Array.from(hex))) {
    if (previousWasMultiplier) {
      previousWasMultiplier = false;
      continue;
    }

    if (COMPRESS_CHAR_AS_MULTIPLIERS.includes(char)) {
      previousWasMultiplier = true;
      const count = COMPRESS_CHAR_AS_MULTIPLIERS.indexOf(char) + 2;
      decompressed += hex.charAt(+index + 1).repeat(count);
    } else {
      decompressed += char;
    }
  }

  return decompressed;
};

export const cosineSimilary = (vectorA = [] as number[], vectorB = [] as number[]) => {
  const dimensionality = Math.min(vectorA.length, vectorB.length);
  let dotAB = 0;
  let dotA = 0;
  let dotB = 0;
  let dimension = 0;
  while (dimension < dimensionality) {
    const componentA = vectorA[dimension];
    const componentB = vectorB[dimension];
    dotAB += componentA * componentB;
    dotA += componentA * componentA;
    dotB += componentB * componentB;
    dimension += 1;
  }

  const magnitude = Math.sqrt(dotA * dotB);
  return magnitude === 0 ? 0 : dotAB / magnitude;
};