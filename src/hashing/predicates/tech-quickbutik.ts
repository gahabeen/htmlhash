import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.quickbutik\\.com/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', '^Quickbutik$'),
    // in scripts

    // in html

    // in text

    // in css
])
