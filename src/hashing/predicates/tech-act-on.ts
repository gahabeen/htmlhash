import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/cdnr/\\d+/acton/bn/tracker/\\d+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ActOn'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
