import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sdk\\. shopifycdn\\.com/buy-button/latest/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ShopifyBuy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
