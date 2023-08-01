import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script[type*='text/partytown']`),
    // in js
    matchRegexInInnerHTML('script', 'partytown'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
