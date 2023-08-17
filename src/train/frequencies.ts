import { HashVector } from '../types';

export const inferFrequencies = (hashes: HashVector[]): HashVector => {
  const weights: number[] = [];
  for (let i = 0; i < hashes[0].length; i++) {
    let weight = 0;
    for (let j = 0; j < hashes.length; j++) {
      weight += hashes[j][i];
    }
    weights.push(1 - (weight / hashes.length));
  }
  return weights;
};

