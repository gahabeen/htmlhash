import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!--[^>]+Tessitura Version: (\\d*\\.\\d*\\.\\d*)?\\;version:\\1'),
    // in text

    // in css
])
