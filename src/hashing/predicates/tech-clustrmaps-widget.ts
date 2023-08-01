import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'clustrmaps\\.com'),
    // in dom
    matchSelector(`img[src*='clustrmaps.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
