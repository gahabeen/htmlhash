import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[aria-labelledby='pi-visa']`),
    // in js
    matchRegexInInnerHTML('script', 'visaApi'),
    matchRegexInInnerHTML('script', 'visaImage'),
    matchRegexInInnerHTML('script', 'visaSrc'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
