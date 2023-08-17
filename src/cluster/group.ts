import { averageHash } from '../hash/hash';
import { HashVector } from '../types';
import { compare } from './compare';

export const cluster = (hashes: HashVector[], clusteringOptions?: { similarityThreshold: number }) => {
  const { similarityThreshold = 0.745 } = clusteringOptions || {};
  let groups: number[][] = [];
  let groupReferenceByIndex = new Map<string, number>();
  let groupHashByIndex = new Map<number, HashVector>();

  const hashEntries = Object.entries(hashes);

  for (const [indexA, hashA] of hashEntries) {
    const groupIndex = groupReferenceByIndex.get(indexA) as number ?? groups.length;
    if (groupIndex === groups.length) {
      groups.push([+indexA]);
      groupReferenceByIndex.set(indexA, groupIndex);
      groupHashByIndex.set(groupIndex, hashA);
    }

    const currentGroup = groups[groupIndex];

    for (const [indexB, hashB] of hashEntries) {

      if (indexB === indexA || groupReferenceByIndex.has(indexB)) continue;

      const { similarity } = compare(hashA, hashB);
      if (similarity >= similarityThreshold) {
        groupReferenceByIndex.set(indexB, groupIndex);
        currentGroup.push(+indexB);
        groupHashByIndex.set(groupIndex, averageHash([groupHashByIndex.get(groupIndex) as HashVector, hashB]))
      }
    }
  }

  return groups.map((group, index) => ({
    group,
    hash: groupHashByIndex.get(index),
  }));
};



// export const clusterWith = (hash: AnyHash, hashes: AnyHash[]) => {
//   const { scoreTreshold } = ClusteringOptions.parse(clusteringOptions);
//   let group = [];

//   for (const [i, subhash] of Object.entries(hashes)) {
//     const comparison = compare(hash, subhash);

//     if (comparison.score >= scoreTreshold) {
//       group.push(+i);
//     }

//   }

//   return group;
// }