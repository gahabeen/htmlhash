import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'reveal\\.clearbit\\.com/v[(0-9)]/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
