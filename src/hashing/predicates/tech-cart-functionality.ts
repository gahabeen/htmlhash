import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googlecommerce\\.com/trustedstores/api/js'),
    // in dom
    matchSelector(`a[href*='/cart']`),
    matchSelector(`a[href*='/order']`),
    matchSelector(`a[href*='/basket']`),
    matchSelector(`a[href*='/trolley']`),
    matchSelector(`a[href*='/bag/']`),
    matchSelector(`a[href*='/shoppingbag']`),
    matchSelector(`a[href*='/checkout']`),
    matchSelector(`a[href*='/winkelwagen']`),
    matchSelector(`[aria-controls='cart']`),
    matchSelector(`[class*='shopping-bag']`),
    matchSelector(`[class*='shopping-cart']`),
    matchSelector(`[class*='checkout']`),
    matchSelector(`[class*='winkelwagen']`),
    // in js
    matchRegexInInnerHTML('script', 'google_tag_params.ecomm_pagetype'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
