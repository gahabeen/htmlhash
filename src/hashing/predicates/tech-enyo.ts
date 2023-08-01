import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'enyo\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'enyo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
