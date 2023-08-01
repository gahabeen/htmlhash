import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'YStore'),
    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+store\\.yahoo\\.net'),
    // in text

    // in css
])
