import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'g6.Graph'),
    matchRegexInInnerHTML('script', 'g6.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
