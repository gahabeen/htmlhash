import fs from 'fs';
import path from 'path';
import { differences, similarity, toBinary } from '../src/fingerprint';
import { hash } from '../src/index';

// const html1 = fs.readFileSync(path.join(__dirname, '../dataset/unstorage-unjs-io.html'), 'utf8');
// const html2 = fs.readFileSync(path.join(__dirname, '../dataset/hackernews-com.html'), 'utf8');

const html1 = fs.readFileSync(path.join(__dirname, '../dataset/dokicloud-one.html'), 'utf8');
// const html2 = fs.readFileSync(path.join(__dirname, '../dataset/rabbitstream-com.html'), 'utf8');
const html2 = fs.readFileSync(path.join(__dirname, '../dataset/hackernews-com.html'), 'utf8');

const run = async () => {
  console.time('fingerprint');

  const value1 = hash(html1, 'short');
  const value2 = hash(html2, 'short');

  console.timeEnd('fingerprint');

  // const bin = toBinary(value);

  console.log(value1, value1.length, toBinary(value1).length);
  console.log(value2, value2.length, toBinary(value2).length);

  // const score = similarity(value1, value2);
  // const diff = differences(value1, value2);

  // console.log(score);
  // console.log(diff);
}

run();