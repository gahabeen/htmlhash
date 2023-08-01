import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sdks\\.shopifycdn\\.com'),
    matchRegexInAttribute('script', 'src', 'cdn\\.shopify\\.com'),
    // in dom
    matchSelector(`link[href*='shopify.com']`),
    // in js
    matchRegexInInnerHTML('script', 'SHOPIFY_API_BASE_URL'),
    matchRegexInInnerHTML('script', 'Shopify'),
    matchRegexInInnerHTML('script', 'ShopifyAPI'),
    matchRegexInInnerHTML('script', 'ShopifyCustomer'),
    // in meta
    matchRegexInAttribute('meta', 'shopify-checkout-api-token', ''),
    matchRegexInAttribute('meta', 'shopify-digital-wallet', ''),
    // in scripts
    matchRegexInInnerHTML('script', 'shopifyTag'),
    // in html

    // in text

    // in css
])
