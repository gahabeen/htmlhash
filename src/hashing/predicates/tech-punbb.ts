import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PUNBB'),
    // in meta

    // in scripts

    // in html
    matchRegex('Powered by <a href="[^>]+punbb'),
    // in text

    // in css
])
