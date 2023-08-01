import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__change'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Proximis Unified Commerce'),
    // in scripts

    // in html
    matchRegex('<html[^>]+data-ng-app="RbsChangeApp"'),
    // in text

    // in css
])
