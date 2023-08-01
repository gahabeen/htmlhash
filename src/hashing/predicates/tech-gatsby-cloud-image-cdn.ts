import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[srcset*='/_gatsby/image/'], source[srcset*='/_gatsby/image/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
