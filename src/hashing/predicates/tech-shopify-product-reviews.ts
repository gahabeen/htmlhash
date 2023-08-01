import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'productreviews\\.shopifycdn\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SPR'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
