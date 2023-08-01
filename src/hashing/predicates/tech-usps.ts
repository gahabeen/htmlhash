import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text
    matchRegex('\\bUSPS\\b'),
    matchRegex('\\bUnited States Postal Service\\b'),
    // in css
])
