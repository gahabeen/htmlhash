import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'checkout\\.razorpay\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Razorpay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
