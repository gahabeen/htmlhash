import fs from 'fs'
import path from 'path'
import { compare, difference, similarity, toBinary } from '../src/fingerprint'
import { hash } from '../src/index'

const htmls = [
    // fs.readFileSync(path.join(__dirname, './dataset/unstorage-unjs-io.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/ww9-soap2day-day.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/mv-thesoap2day-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, "./dataset/google-com.html"), "utf8"),
    // fs.readFileSync(path.join(__dirname, './dataset/dokicloud-one.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/rabbitstream-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/twitter-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/hackernews-com.html'), 'utf8'),
    // fs.readFileSync(path.join(__dirname, './dataset/ww9-soap2day-day--the-matrix-soap2day.html'), 'utf8'),
    fs.readFileSync(path.join(__dirname, './dataset/mv-thesoap2day-com--movies--the-matrix.html'), 'utf8'),
    fs.readFileSync(path.join(__dirname, './dataset/myflixerz.to--movie--the-matrix-19724.html'), 'utf8'),
]

const run = async () => {
    console.time('fingerprint 1')

    const value1 = hash(htmls[0])

    console.timeEnd('fingerprint 1')

    console.time('fingerprint 2')

    const value2 = hash(htmls[1])

    console.timeEnd('fingerprint 2')

    // const bin = toBinary(value);

    console.log(value1, value1.length)
    // console.log(value2, value2.length)

    // one liner to make an array of 255 0.5s

    const score = similarity(value1, value2, Array.from({ length: 4660 }, () => Math.random()))
    const { difference } = compare(value1, value2)

    console.log(score, difference.length)
}

run()
