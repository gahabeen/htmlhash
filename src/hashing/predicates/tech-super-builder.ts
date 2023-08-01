import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='super-static-assets.'], link[href*='super.so'], img[srcset*='super-static-assets.']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
