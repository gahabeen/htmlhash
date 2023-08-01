import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[data-chunk*='front-commerce-src-web-theme-routes'], script[data-chunk*='front-commerce-src-web-theme-routes']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
