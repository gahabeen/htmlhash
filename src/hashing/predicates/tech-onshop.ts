import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='cdn.onshop.asia/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Onshop Ecommerce'),
    // in scripts

    // in html

    // in text

    // in css
])
