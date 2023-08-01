import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'LightMon Engine'),
    // in scripts

    // in html
    matchRegex('<!-- Lightmon Engine Copyright Lightmon'),
    // in text

    // in css
])
