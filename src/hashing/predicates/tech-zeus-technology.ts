import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'zeus.version'),
    matchRegexInInnerHTML('script', 'zeusAdUnitPath'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
