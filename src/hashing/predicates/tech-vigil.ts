import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`p > a[href*='github.com/valeriansaliou/vigil']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
