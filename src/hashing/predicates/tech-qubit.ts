import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.goqubit\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__qubit'),
    matchRegexInInnerHTML('script', 'onQubitReady'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
