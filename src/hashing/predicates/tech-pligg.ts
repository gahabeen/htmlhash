import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pligg_'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Pligg'),
    // in scripts

    // in html
    matchRegex('<span[^>]+id="xvotes-0'),
    // in text

    // in css
])
