import fs from 'fs';
import path from 'path';
import * as fp from '../src/index';

const html = fs.readFileSync(path.join(__dirname, '../dataset/unstorage-unjs-io.html'), 'utf8');

const run = async () => {
  console.time('fingerprint');

  const value = fp.hash(html);

  console.timeEnd('fingerprint');

  console.log(value);
}

run();