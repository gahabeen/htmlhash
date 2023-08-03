import fs from 'fs';
import path from 'path';
import { cluster, utils } from '../src/index';
import stats from './output/stats.json';

const weightsPath = path.join(__dirname, './output/weights.txt');
const weights = fs.readFileSync(weightsPath, 'utf8').split('\n').map((x) => x.split('|').map((y) => +y))[0];

// const files = fs.readdirSync(path.join(__dirname, './dataset'));
const files = fs.readdirSync(path.join(__dirname, '../corpus'));
const hashes = fs.readFileSync(path.join(__dirname, './output/hashes.txt'), 'utf8').split('\n').map((x) => x.split(':')[1]?.trim()).filter(Boolean);
// const hashes = fs.readFileSync(path.join(__dirname, './output/cluster-hashes.txt'), 'utf8').split('\n');

console.time('clustering')

const groups = cluster(hashes.slice(300, 400), { weights, ...stats, scoreTreshold: 0.9, confidenceTreshold: 0.25 });

const names = groups.map((group) => group.map((idx) => files[idx]));

console.timeEnd('clustering')

console.log(JSON.stringify(names, null, 2))