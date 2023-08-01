import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div.yoori--cookies`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', "console\\.log\\(\\'Yoori-Ecommerce"),
    // in html

    // in text

    // in css
])
