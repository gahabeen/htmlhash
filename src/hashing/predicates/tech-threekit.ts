import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'threekit.configuratorForm'),
    matchRegexInInnerHTML('script', 'threekitAR'),
    matchRegexInInnerHTML('script', 'threekitPlayer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
