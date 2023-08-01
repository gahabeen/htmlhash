import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'secure\\.wayforpay\\.com'),
    // in dom
    matchSelector(`form[action*='secure.wayforpay.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
