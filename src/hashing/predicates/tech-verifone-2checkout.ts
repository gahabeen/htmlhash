import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#order__processedby`),
    matchSelector(`link[href*='.2checkout.com']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '2checkout\\.com'),
    // in html

    // in text

    // in css
])
