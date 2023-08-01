import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='media.bluestonepim.com/'], img[data-srcset*='media.bluestonepim.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
