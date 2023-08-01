import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`style[data-unocss]`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
    matchRegex('--un-(?:rotate|translate|space-x|text-opacity|border-opacity)'),
])
