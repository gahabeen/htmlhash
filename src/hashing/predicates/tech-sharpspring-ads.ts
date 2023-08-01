import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.perfectaudience\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_pa'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
