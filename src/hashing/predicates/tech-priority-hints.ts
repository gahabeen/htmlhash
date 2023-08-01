import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[fetchpriority], img[fetchpriority], script[fetchpriority], link[fetchpriority]`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
