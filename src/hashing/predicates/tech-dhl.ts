import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[alt*='dhl' i]`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text
    matchRegex('\\bDHL\\b'),
    // in css
])
