import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.shgcdn.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
