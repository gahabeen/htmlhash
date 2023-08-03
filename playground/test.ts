import fs from 'fs';
import path from 'path';
import { compare, hash } from '../src/';
import stats from './output/stats.json';

const weightsPath = path.join(__dirname, './output/weights.txt');
const weights = fs.readFileSync(weightsPath, 'utf8').split('\n').map((x) => x.split('|').map((y) => +y))[0];


const htmls = [
    // fs.readFileSync(path.join(__dirname, './dataset/fmovies-ps.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/fmovies-to.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/fmovies-wtf.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/fmovies2-pro.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/dizimini-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/yabancidizi-pro.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/yabanci-dizi-me.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/proton-mail-me.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/unstorage-unjs-io.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/ww9-soap2day-day.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/mv-thesoap2day-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/myflixerz-to.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, "./dataset/google-com.html"), "utf8"),
    // fs.readFileSync(path.join(__dirname, './dataset/dokicloud-one.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/rabbitstream-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/twitter-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/hackernews-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/ww9-soap2day-day--the-matrix-soap2day.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/mv-thesoap2day-com--movies--the-matrix.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/myflixerz-to--movie--the-matrix-19724.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/myflixerz-to--movie--a-glitch-in-the-matrix-67727.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/myflixerz-to--tv--when-sharks-attack-and-why-98722.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/cineb.rs--watch-movie--watch-the-matrix-free-19724-5349115.html'), 'utf8'),
    fs.readFileSync(path.join(__dirname, './dataset/hesgoal-tv.html'), 'utf8'),
    fs.readFileSync(path.join(__dirname, './dataset/voirserie-win.html'), 'utf8'),


]

const run = async () => {
    console.time('fingerprint 1')

    const value1 = hash(htmls[0], 'bin')

    console.timeEnd('fingerprint 1')

    console.time('fingerprint 2')

    const value2 = hash(htmls[1], 'bin')

    console.timeEnd('fingerprint 2')

    const comparison = compare(value1, value2, { weights, ...stats })

    console.log(comparison)
}

run()
