import { AnyHash, ClusteringOptions } from '../types';
import { toBinaryArray } from '../utils';
import { compare } from './compare';

export const cluster = (hashes: AnyHash[], clusteringOptions?: Partial<ClusteringOptions>) => {
  const { scoreTreshold, confidenceTreshold } = ClusteringOptions.parse(clusteringOptions);
  let groups: number[][] = [];

  const binaryHashes = hashes.map(toBinaryArray);

  for (const [ih, hash] of Object.entries(binaryHashes)) {
    groups.push([+ih]);
    const currentGroup = groups[groups.length - 1]

    for (const [i, subhash] of Object.entries(binaryHashes)) {
      if (i === ih) continue;

      const comparison = compare(hash, subhash, clusteringOptions);

      if (comparison.score >= scoreTreshold && comparison.confidence >= confidenceTreshold) {
        currentGroup.push(+i);
      }
    }

    console.log(`Group ${groups.length} has ${currentGroup.length} elements`);
  }

  return groups;
};