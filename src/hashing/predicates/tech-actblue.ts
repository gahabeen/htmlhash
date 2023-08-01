import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='//secure.actblue.com/donate/']`),
    // in js
    matchRegexInInnerHTML('script', 'actblue.__configuration'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
