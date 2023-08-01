import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Bsale.version'),
    // in meta
    matchRegexInAttribute('meta', 'autor', 'Bsale'),
    matchRegexInAttribute('meta', 'generator', 'Bsale'),
    // in scripts

    // in html

    // in text

    // in css
])
