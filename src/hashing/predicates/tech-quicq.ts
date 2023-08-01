import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.qcqcdn.com/'], img[data-src*='.qcqcdn.com/'], img[src*='cdn.quicq.io/'], img[data-src*='cdn.quicq.io/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
