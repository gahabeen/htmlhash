import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[data-builder-content-id], img[src*='cdn.builder.io']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
