import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:cdn|s1)\\.listrakbi\\.com'),
    matchRegexInAttribute('script', 'src', 'services\\.listrak\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_LTKSignup'),
    matchRegexInInnerHTML('script', '_LTKSubscriber'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
