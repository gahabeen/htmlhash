import { HashVector } from '../types';
import { dice } from '../utils';

export const compare = (hashA: HashVector, hashB: HashVector) => {
  const distance = dice(hashA, hashB);
  return {
    similarity: 1 - distance,
    distance
  };
}
