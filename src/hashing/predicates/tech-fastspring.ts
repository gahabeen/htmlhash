import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<a [^>]*href="https?://sites\\.fastspring\\.com'),
    matchRegex('<form [^>]*action="https?://sites\\.fastspring\\.com'),
    // in text

    // in css
])
