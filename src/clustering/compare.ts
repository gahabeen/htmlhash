import { formatWeights } from '../training';
import { AnyHash, ClusteringOptions } from '../types';
import { getDimensionality, hammingDistance, log, toBinaryArray } from '../utils';

export const compare = (hashA: AnyHash, hashB: AnyHash, clusterOptions?: Partial<ClusteringOptions>) => {
  const options = ClusteringOptions.parse(clusterOptions);

  const binA = toBinaryArray(hashA)
  const binB = toBinaryArray(hashB)

  const dimensionality = getDimensionality([binA, binB, options.weights]);
  const weights = formatWeights(options.weights, dimensionality, options.medianHashScore);
  // const weights = options.weights;

  let commonTruthyIndexes = [];
  let truthyIndexesInA = [];
  let uniqueTruthyIndexesInA = [];
  let truthyIndexesInB = [];
  let uniqueTruthyIndexesInB = [];

  for (let i = 0; i < dimensionality; i++) {

    if (binA[i] && binB[i]) {
      commonTruthyIndexes.push(i);
      truthyIndexesInA.push(i);
      truthyIndexesInB.push(i);
    } else if (binA[i]) {
      truthyIndexesInA.push(i);
      if (!binB[i]) uniqueTruthyIndexesInA.push(i);
    } else if (binB[i]) {
      truthyIndexesInB.push(i);
      if (!binA[i]) uniqueTruthyIndexesInB.push(i);
    }

  }

  const commonTruthyIndexesScore = commonTruthyIndexes.map((index) => weights[index]).reduce((a, b) => a + b, 0) / commonTruthyIndexes.length;

  const uniqueTruthyIndexesRatioInA = uniqueTruthyIndexesInA.length / truthyIndexesInA.length;
  const uniqueTruthyIndexesRatioInB = uniqueTruthyIndexesInB.length / truthyIndexesInB.length;

  const uniqueTruthyIndexesScoreA = !uniqueTruthyIndexesInA.length ? 0 : uniqueTruthyIndexesInA.map((index) => weights[index]).reduce((a, b) => a + b, 0) / uniqueTruthyIndexesInA.length;
  const uniqueTruthyIndexesScoreB = !uniqueTruthyIndexesInB.length ? 0 : uniqueTruthyIndexesInB.map((index) => weights[index]).reduce((a, b) => a + b, 0) / uniqueTruthyIndexesInB.length;

  const ponderatedScoreA = uniqueTruthyIndexesScoreA * (uniqueTruthyIndexesRatioInA);
  const ponderatedScoreB = uniqueTruthyIndexesScoreB * (uniqueTruthyIndexesRatioInB);

  const confidence = (commonTruthyIndexesScore - options.minHashScore) / (options.maxHashScore - options.minHashScore);

  const minponderatedScore = Math.min(ponderatedScoreA, ponderatedScoreB);
  const maxponderatedScore = Math.max(ponderatedScoreA, ponderatedScoreB);
  const score = 1 - ((minponderatedScore + maxponderatedScore) / 2);
  // const score = 1 - ((minponderatedScore * 3 + maxponderatedScore * 2) / 5);

  console.log({
    commonTruthyIndexesScore,
    uniqueTruthyIndexesRatioInA,
    uniqueTruthyIndexesInACount: truthyIndexesInA.length,
    uniqueTruthyIndexesRatioInB,
    uniqueTruthyIndexesInBCount: truthyIndexesInB.length,
    uniqueTruthyIndexesScoreA,
    uniqueTruthyIndexesScoreB,
    ponderatedScoreA,
    ponderatedScoreB,
  });

  return {
    confidence: Math.min(1, confidence),
    score: Math.min(1, score),
    hammingScore: 1 - hammingDistance(toBinaryArray(hashA), toBinaryArray(hashB)) / dimensionality,
    // common: commonTruthyIndexes.map((index) => names[index]),
    // uniqueInA: uniqueTruthyIndexesInA.map((index) => names[index]),
    // uniqueInB: uniqueTruthyIndexesInB.map((index) => names[index]),
  }
}