import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'logicommerceGlobal'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^LogiCommerce$'),
    matchRegexInAttribute('meta', 'logicommerce', ''),
    // in scripts

    // in html

    // in text

    // in css
])
