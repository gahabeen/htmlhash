import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LITHIUM'),
    // in meta

    // in scripts

    // in html
    matchRegex(' <a [^>]+Powered by Lithium'),
    // in text

    // in css
])
