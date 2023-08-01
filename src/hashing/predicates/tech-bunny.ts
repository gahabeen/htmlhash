import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[src*='.b-cdn.net'],[data-src*='.b-cdn.net']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
