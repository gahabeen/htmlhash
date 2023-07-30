import digits from './digits';
import { Predicate } from './types';
import { binaryToHex, compressHex } from './utils';

export const runPredicateAsBinary = (html: string, predicates: Predicate[]) => {
  return predicates.map((predicate) => predicate(html) ? 1 : 0);
}

export const hash = (html: string) => {
  const predicates = digits.map((digit) => digit.predicate);
  const bin = runPredicateAsBinary(html, predicates).join('');
  const hex = binaryToHex(bin);
  const compressed = compressHex(hex);

  return compressed;
};