import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'admiral'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'admiral(?:-engaged|:enabled)'),
    // in html

    // in text

    // in css
])
