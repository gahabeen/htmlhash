import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='app.purecars.com/']`),
    // in js
    matchRegexInInnerHTML('script', '_pureCars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
