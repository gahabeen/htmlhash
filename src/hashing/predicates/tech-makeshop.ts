import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='gigaplus.makeshop.jp'], img[src*='gigaplus.makeshop.jp']`),
    // in js
    matchRegexInInnerHTML('script', 'MakeShop_TopSearch'),
    matchRegexInInnerHTML('script', 'makeshop_ga_gtag'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
