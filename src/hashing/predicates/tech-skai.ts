import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ktag_Constants'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '\\.xg4ken\\.com'),
    // in html

    // in text

    // in css
])
