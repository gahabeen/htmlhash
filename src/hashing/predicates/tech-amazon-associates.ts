import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.associates-amazon\\.com'),
    // in dom
    matchSelector(`a[href*='amazon.com']`),
    matchSelector(`a[href*='amzn.to']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
