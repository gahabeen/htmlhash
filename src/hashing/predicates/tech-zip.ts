import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'quadpay\\.com'),
    matchRegexInAttribute('script', 'src', 'static\\.zipmoney\\.com\\.au'),
    matchRegexInAttribute('script', 'src', 'zip\\.co'),
    // in dom
    matchSelector(`link[href*='widgets.quadpay.com/'], div[data-quadpay-src*='.quadpay.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'QuadPayShopify'),
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.zip'),
    matchRegexInInnerHTML('script', 'quadpayID'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
