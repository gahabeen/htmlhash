
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

// console.log(inferWeights([
//   [1, 0, 1, 0, 1, 0, 1, 0],
//   [1, 1, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 0, 1, 1, 1, 0],
//   [1, 0, 1, 0, 1, 0, 1, 1],
//   [1, 0, 1, 0, 1, 0, 0, 0],
//   [1, 1, 1, 0, 1, 0, 1, 0],
//   [1, 0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 1, 0, 1, 0, 1, 1],
// ]))

// console.log(inferWeights([
//   inferWeights([
//     [1, 0, 1, 0, 1, 0, 1, 0],
//     [1, 1, 1, 0, 1, 0, 1, 0],
//     [1, 0, 1, 0, 1, 1, 1, 0],
//     [1, 0, 1, 0, 1, 0, 1, 1],
//   ]),
//   inferWeights([
//     [1, 0, 1, 0, 1, 0, 0, 0],
//     [1, 1, 1, 0, 1, 0, 1, 0],
//     [1, 0, 1, 1, 1, 1, 1, 0],
//     [0, 0, 1, 0, 1, 0, 1, 1],
//   ])
// ]))