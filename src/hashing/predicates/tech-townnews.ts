import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TNCMS'),
    matchRegexInInnerHTML('script', 'TNStats_Tracker'),
    matchRegexInInnerHTML('script', 'TNTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
