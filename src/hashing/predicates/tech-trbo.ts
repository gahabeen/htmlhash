import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.trbo\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_trbo'),
    matchRegexInInnerHTML('script', '_trbo_start'),
    matchRegexInInnerHTML('script', '_trboq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
