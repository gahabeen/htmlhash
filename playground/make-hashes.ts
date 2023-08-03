import fs from 'fs';
import path from 'path';
import { hash } from '../src/fingerprint';

const corpus = path.join(__dirname, '../corpus');
const output = path.join(__dirname, './output/hashes.txt');

for (const file of fs.readdirSync(corpus)) {
    const filePath = path.join(corpus, file);
    const html = fs.readFileSync(filePath, 'utf8');

    const value = hash(html);

    fs.appendFileSync(output, `${file}: ${value}\n`);
    console.log(`${file}: ${value.length}`);
}
