import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[class*='civictheme-image']`),
    matchSelector(`img[class*='civic-image']`),
    matchSelector(`img[class*='ct-image']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
