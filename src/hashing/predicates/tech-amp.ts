import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<html[^>]* (?:amp|⚡)[^-]'),
    matchRegex('<link rel="amphtml"'),
    // in text

    // in css
])
