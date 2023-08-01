import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widgets\\.shophumm\\.com'),
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/oxipay-payment-gateway/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.humm'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
