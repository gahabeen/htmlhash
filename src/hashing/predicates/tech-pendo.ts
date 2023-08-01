import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.pendo\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pendo.HOST'),
    matchRegexInInnerHTML('script', 'pendo.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
