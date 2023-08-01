import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ocJSON'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'OctoberCMS'),
    // in scripts

    // in html

    // in text

    // in css
])
