import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_hsq'),
    matchRegexInInnerHTML('script', 'hubspot'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- Start of Async HubSpot'),
    // in text

    // in css
])
