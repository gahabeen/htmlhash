import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`button.bpa-btn`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
