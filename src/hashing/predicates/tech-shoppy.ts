import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.shoppy\\.gg'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Shoppy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
