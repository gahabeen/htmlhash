import { averageHash } from '../hash/hash';
import { HashVector, ClusteringOptions } from '../types';
import { compare } from './compare';

// AnyHashWithValues
export const cluster = (hashes: HashVector[], clusteringOptions?: Partial<ClusteringOptions>) => {
  const { scoreTreshold } = ClusteringOptions.parse(clusteringOptions);
  let groups: number[][] = [];
  // let hashesByGroup = new Map<number, AnyHash>();
  let groupReferenceByIndex = new Map<string, number>();
  let groupHashByIndex = new Map<number, HashVector>();
  // let knownScores = new Map<string, number>();

  // const hashWithValuesEntries = Object.entries(hashes);
  const hashEntries = Object.entries(hashes);

  for (const [indexA, hashA] of hashEntries) {
    // for (const [indexA, { hash: hashA, squarred: squarredA }] of hashWithValuesEntries) {
    const groupIndex = groupReferenceByIndex.get(indexA) as number ?? groups.length;
    if (groupIndex === groups.length) {
      groups.push([+indexA]);
      groupReferenceByIndex.set(indexA, groupIndex);
      groupHashByIndex.set(groupIndex, hashA);
    }

    const currentGroup = groups[groupIndex];

    // for (const [indexB, { hash: hashB, squarred: squarredB }] of hashWithValuesEntries) {
    for (const [indexB, hashB] of hashEntries) {

      if (indexB === indexA || groupReferenceByIndex.has(indexB)) continue;

      // const key = [hashA.toString(), hashB.toString()].sort((a, z) => a.localeCompare(z)).join('|');
      // let score;

      // if (knownScores.has(key)) {
      //   score = knownScores.get(key) as number;
      // } else {
      // score = compare(hashA, hashB).score;
      // score = compare(hashA, hashB, { squarredA, squarredB }).score;
      // knownScores.set(key, score);
      // }

      const score = compare(hashA, hashB).similarity;
      if (score >= scoreTreshold) {
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