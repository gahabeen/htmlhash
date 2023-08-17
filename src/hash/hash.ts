import { traverse } from '../parse/html';
import { HashVector } from '../types';
import { HTMLHasher } from './generics/html-hasher';
import { HTMLCompositionHasher } from './hashers/html-composition-hasher';

export const hash = (html: string, hasher: HTMLHasher = new HTMLCompositionHasher()) => {
    traverse(html, hasher);
    return hasher.hash();
}

export const averageHash = (hashes: HashVector[]) => {
    const avgDigits: number[] = [];
    for (const index in hashes) {
        const sum = hashes.reduce((acc, hash) => acc + hash[index], 0)
        avgDigits.push(sum / hashes.length)
    }
    return avgDigits;
}