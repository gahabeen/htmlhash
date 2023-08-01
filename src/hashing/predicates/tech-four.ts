import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'scripts\\.paywithfour\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Four'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
