import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='openstreetmap.org'],iframe[data-lazy-src*='openstreetmap.org']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
