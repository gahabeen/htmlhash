import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Sazito'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^Sazito'),
    // in scripts

    // in html

    // in text

    // in css
])
