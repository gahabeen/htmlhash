import fs from 'fs';
import path from 'path';
import { hash } from '../src/index';

const files = fs.readdirSync(path.join(__dirname, './dataset'))

const hashes = files.map((file) => {
    const html = fs.readFileSync(path.join(__dirname, './dataset', file), 'utf8')
    return hash(html, 'bin');
});

fs.writeFileSync(path.join(__dirname, './output/cluster-hashes.txt'), hashes.join('\n'))