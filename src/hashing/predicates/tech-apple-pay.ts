import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[aria-labelledby='pi-apple_pay']`),
    matchSelector(`script#apple-pay`),
    matchSelector(`script#apple-pay-shop-capabilities`),
    matchSelector(`input#applePayMerchantId`),
    // in js
    matchRegexInInnerHTML('script', 'ApplePay'),
    matchRegexInInnerHTML('script', 'applePayButtonClicked'),
    matchRegexInInnerHTML('script', 'braintree.applePay'),
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.applepay'),
    matchRegexInInnerHTML('script', 'dw.applepay'),
    matchRegexInInnerHTML('script', 'enableApplePay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
