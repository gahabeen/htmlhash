import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'paypalobjects\\.com'),
    // in dom
    matchSelector(`button`),
    matchSelector(`iframe[src*='paypal.com'], img[src*='paypal.com'], img[src*='paypalobjects.com'], [aria-labelledby='pi-paypal'], [data-paypal-v4='true'], img[alt*='PayPal' i]`),
    // in js
    matchRegexInInnerHTML('script', 'PAYPAL'),
    matchRegexInInnerHTML('script', '__paypal_global__'),
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.paypal'),
    matchRegexInInnerHTML('script', 'enablePaypal'),
    matchRegexInInnerHTML('script', 'paypal'),
    matchRegexInInnerHTML('script', 'paypalClientId'),
    matchRegexInInnerHTML('script', 'paypalJs'),
    matchRegexInInnerHTML('script', 'wc_ga_pro.available_gateways.paypal'),
    // in meta
    matchRegexInAttribute('meta', 'id', 'in-context-paypal-metadata'),
    // in scripts

    // in html

    // in text

    // in css
])
