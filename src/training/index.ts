import { AnyHash } from '../types';
import { toBinaryArray } from '../utils';

export const inferWeights = (hashes: number[][]): number[] => {
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

export const applyWeights = (hash: AnyHash, weights: number[]): number[] => {
  const bin = toBinaryArray(hash);
  return bin.map((value, index) => value * weights[index]);
};

export const formatWeights = (weights: number[], length: number, defaultWeight: number = 0.35): number[] => {
  const formattedWeights = [];
  for (let i = 0; i < length; i++) {
    formattedWeights.push(i in weights ? weights[i] : defaultWeight);
  }
  return formattedWeights;
};