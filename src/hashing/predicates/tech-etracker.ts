import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.etracker\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_etracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
