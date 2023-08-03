import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { inferWeights } from '../src/index';

const hashesPath = path.join(__dirname, './output/hashes.txt');
const weightsPath = path.join(__dirname, './output/weights.txt');
const statsPath = path.join(__dirname, './output/stats.json');

let currentHashes: number[][] = [];
let weightedActivePairs: [number, number][] = [];

let weights: number[] = [];

const calculateAverageValue = (values: number[]) => {
  const sum = values.reduce((a, b) => a + b, 0);
  return sum / values.length;
}

const calculateMedianValue = (values: number[]) => {
  values.sort((a, b) => a - b);
  const half = Math.floor(values.length / 2);
  if (values.length % 2) {
    return values[half];
  }
  return (values[half - 1] + values[half]) / 2.0;
}

{
  const rl = readline.createInterface({
    input: fs.createReadStream(hashesPath),
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    const hash = line.split(':')[1].trim();
    currentHashes.push(hash.split('').map((x) => +x) as number[]);
  });

  rl.on('close', () => {
    console.log('File reading complete!');
    weights = inferWeights(currentHashes);
    fs.writeFileSync(weightsPath, `${weights.join('|')}\n`);

    {
      const rl = readline.createInterface({
        input: fs.createReadStream(hashesPath),
        crlfDelay: Infinity
      });

      rl.on('line', (line) => {
        const hash = line.split(':')[1].trim();
        let totalWeight: number = 0;
        let truthyDigits: number = 0;

        for (let i = 0; i < hash.length; i++) {
          const weight = weights[i];

          if (hash[i] !== '0') {
            totalWeight += weight;
            truthyDigits++;
          }
        }

        weightedActivePairs.push([totalWeight, truthyDigits]);
      });

      rl.on('close', () => {
        console.log('File reading complete!');

        const sorted = weightedActivePairs.sort((a, z) => a[0] - z[0]);
        const filtered = sorted.slice(Math.floor(weightedActivePairs.length * 0.05), Math.floor(weightedActivePairs.length * 0.95))

        const min = Math.min(...filtered.map((x) => x[0]));
        const minScore = Math.min(...filtered.map((x) => x[1] ? x[0] / x[1] : 0));
        const max = Math.max(...filtered.map((x) => x[0]));
        const maxScore = Math.max(...filtered.map((x) => x[1] ? x[0] / x[1] : 0));
        const median = calculateMedianValue(filtered.map((x) => x[0]));
        const medianScore = calculateMedianValue(filtered.map((x) => x[1] ? x[0] / x[1] : 0));

        fs.writeFileSync(statsPath, JSON.stringify({
          minHashWeight: min,
          minHashScore: minScore,
          medianHashWeight: median,
          medianHashScore: medianScore,
          maxHashWeight: max,
          maxHashScore: maxScore
        }, null, 2));
      });
    };
  });
};