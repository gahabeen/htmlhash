import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`source[srcset*='.scene7.com/'], link[href*='.scene7.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
