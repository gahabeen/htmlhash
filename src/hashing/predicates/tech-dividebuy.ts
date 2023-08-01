import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`div[class*='dividebuy-softcredit']`),
    // in js
    matchRegexInInnerHTML('script', 'display_dividebuy_modal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
