import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https?://[^/]*\\.pubmatic\\.com'),
    // in dom
    matchSelector(`iframe[src*='.pubmatic.com'], link[href*='.pubmatic.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
