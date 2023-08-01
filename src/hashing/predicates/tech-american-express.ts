import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[aria-labelledby='pi-american_express']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
