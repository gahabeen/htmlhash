import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Sizebay'),
    matchRegexInInnerHTML('script', 'SizebayParams'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
