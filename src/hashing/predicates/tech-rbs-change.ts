import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'RBS Change'),
    // in scripts

    // in html
    matchRegex('<html[^>]+xmlns:change='),
    // in text

    // in css
])
