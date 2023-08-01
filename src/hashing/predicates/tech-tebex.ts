import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.tebex.io']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '\\.tebexLogin'),
    // in html

    // in text

    // in css
])
