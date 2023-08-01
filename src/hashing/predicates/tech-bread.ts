import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.getbread\\.com'),
    // in dom
    matchSelector(`#bread-mini-cart-btn`),
    // in js
    matchRegexInInnerHTML('script', 'BreadCalc'),
    matchRegexInInnerHTML('script', 'BreadError'),
    matchRegexInInnerHTML('script', 'BreadLoaded'),
    matchRegexInInnerHTML('script', 'BreadShopify'),
    matchRegexInInnerHTML('script', 'bread.appHost'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
