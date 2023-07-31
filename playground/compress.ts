import { compressHex, decompressHex } from '../src/utils';

const run = async () => {
  console.time('fingerprint');

  const hash = `1${"0".repeat(200)}11`;
  const compressed = compressHex(hash);
  const decompressed = decompressHex(compressed);

  console.timeEnd('fingerprint');

  console.log(hash);
  console.log(compressed);
  console.log(decompressed);
}

run();