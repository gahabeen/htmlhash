import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text
    matchRegex('\\bpost\\.at\\b'),
    matchRegex('\\bPost AG\\b'),
    matchRegex('\\b[ÖO]sterreichische Post\\b'),
    // in css
])
