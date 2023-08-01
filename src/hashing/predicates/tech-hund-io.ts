import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.hund\\.io/'),
    // in dom
    matchSelector(`link[href*='hund-client-logos']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
