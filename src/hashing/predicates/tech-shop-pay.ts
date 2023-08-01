import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.shopify\\.com/shopifycloud/shopify_pay/'),
    // in dom
    matchSelector(`[aria-labelledby='pi-shopify_pay']`),
    matchSelector(`ul[data-shopify-buttoncontainer] li`),
    // in js
    matchRegexInInnerHTML('script', 'ShopifyPay.apiHost'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
