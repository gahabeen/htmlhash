import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[data-src*='/polopoly_fs/'], link[href*='/polopoly_fs/'], img[src*='/polopoly_fs/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
