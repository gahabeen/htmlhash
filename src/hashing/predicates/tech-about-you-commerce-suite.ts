import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='cdn.aboutyou.de/'], img[src*='cdn.aboutyou.de/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
