import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[data-ackee-domain-id], [data-ackee-server]`),
    // in js
    matchRegexInInnerHTML('script', 'ackeeTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
