import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tagcommander\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'tc_vars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
