import * as hh from '../src/index.js'

const html1 = '<html><body><h1>Hello, world!</h1></body></html>'
const hash1 = hh.hash(html1)
console.log(hash1) // Z0O01Z0U08Z0Z0Z0h02Z0Z0Z0Z0h02Z0Z0Z0S04Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0J0

const html2 = '<html><body><h2>Hello, world!</h2></body></html>'
const hash2 = hh.hash(html2)
console.log(hash2) // Z0O01Z0U08Z0Z0Z0h02Z0Z0j04Z0W02v08Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z0Z00

const score = hh.similarity(hh.toBinary(hash1), hh.toBinary(hash2))
console.log(score) // 0.9998385012919897

console.log('dif', hh.differences(hash1, hash2)) // [ "tag-h2", "tag-h1" ]
