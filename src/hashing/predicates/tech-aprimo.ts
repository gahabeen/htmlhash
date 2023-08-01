import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`source[data-srcset*='/media/aprimo'], img[data-src*='/media/Aprimo'], img[src*='aprimo']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
