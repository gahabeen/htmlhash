import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[class*='_shopaholic']`),
    // in js
    matchRegexInInnerHTML('script', 'ShopaholicCart'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
