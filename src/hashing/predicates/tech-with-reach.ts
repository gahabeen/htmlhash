import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.rch\\.io/'),
    matchRegexInAttribute('script', 'src', 'checkout\\.gointerpay\\.net'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
