import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__BLITZ_MIDDLEWARE_HOOKS'),
    matchRegexInInnerHTML('script', '__BLITZ_SUSPENSE_ENABLED'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
