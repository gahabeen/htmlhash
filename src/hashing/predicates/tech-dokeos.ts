import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Dokeos'),
    // in scripts

    // in html
    matchRegex('(?:Portal <a[^>]+>Dokeos|@import "[^"]+dokeos_blue)'),
    // in text

    // in css
])
