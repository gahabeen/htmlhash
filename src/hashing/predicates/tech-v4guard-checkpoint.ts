import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.v4guard\\.io/checkpoint'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
