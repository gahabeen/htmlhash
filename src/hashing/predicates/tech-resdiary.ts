import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.resdiary\\.\\w+/'),
    // in dom
    matchSelector(`iframe[src*='resdiary']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
