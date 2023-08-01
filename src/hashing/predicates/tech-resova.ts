import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.resova.']`),
    // in js
    matchRegexInInnerHTML('script', 'baseUrl'),
    matchRegexInInnerHTML('script', 'initResova'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
