import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'syliusshop/script\\.js'),
    matchRegexInAttribute('script', 'src', 'syliusgtmenhancedecommerceplugin'),
    // in dom
    matchSelector(`body.sylius_homepage`),
    matchSelector(`div#sylius-cart-button`),
    matchSelector(`img[src*='sylius_shop_product_tiny_thumbnail']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
