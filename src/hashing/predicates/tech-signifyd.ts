import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.signifyd\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SIGNIFYD_GLOBAL'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
