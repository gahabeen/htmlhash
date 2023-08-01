import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'xoops'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'XOOPS'),
    // in scripts

    // in html

    // in text

    // in css
])
