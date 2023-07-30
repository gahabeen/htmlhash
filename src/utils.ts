import { COMPRESS_CHAR_AS_MULTIPLIERS } from './consts';

export const escapeRegExpValue = function (value: string) {
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


// compress duplicated characters to short
export const compressHex = (hex: string): string => {
  let previousChar = hex[0];
  let charCount = 1;
  let compressed = '';

  for (const char of Array.from(hex).slice(1)) {
    if (previousChar === char) {
      charCount++;
    } else {
      if (charCount > 1 && charCount < COMPRESS_CHAR_AS_MULTIPLIERS.length) {
        compressed += `${COMPRESS_CHAR_AS_MULTIPLIERS[charCount - 1]}${previousChar}`;
      } else {
        compressed += previousChar;
      }
      previousChar = char;
      charCount = 1;
    }
  }

  return compressed + previousChar;
}

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
      const count = COMPRESS_CHAR_AS_MULTIPLIERS.indexOf(char) + 1;
      decompressed += hex.charAt(+index + 1).repeat(count);
    } else {
      decompressed += char;
    }
  }

  return decompressed;
}