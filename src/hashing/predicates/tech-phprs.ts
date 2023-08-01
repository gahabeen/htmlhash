import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.php']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^phpRS$'),
    // in scripts

    // in html

    // in text

    // in css
])
