import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tagboard\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.tagboard.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
