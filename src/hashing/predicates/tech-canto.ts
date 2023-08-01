import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.canto.com/'], a[href*='.canto.com/'], img[src*='.canto.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
