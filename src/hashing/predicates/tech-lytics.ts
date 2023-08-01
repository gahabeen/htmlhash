import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.lytics\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__lytics__jstag__.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
