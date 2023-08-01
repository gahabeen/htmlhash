import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.iperceptions\\.com'),
    // in dom
    matchSelector(`iframe[src*='.iperceptions.com'], link[href*='.iperceptions.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
