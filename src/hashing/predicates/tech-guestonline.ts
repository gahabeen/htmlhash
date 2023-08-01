import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ib\\.guestonline\\.\\w+'),
    // in dom
    matchSelector(`iframe[src*='ib.guestonline.']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
