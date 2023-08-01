import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.dailydeals\\.ai/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ddAddToCheckout'),
    matchRegexInInnerHTML('script', 'ddAddToOrder'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
