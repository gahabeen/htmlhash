import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'vin65.checkout'),
    matchRegexInInnerHTML('script', 'vin65remote'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^WineDirect\\sEcommerce'),
    // in scripts

    // in html

    // in text

    // in css
])
