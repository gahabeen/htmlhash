import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.latitudepayapps\\.com/'),
    // in dom
    matchSelector(`a[href*='latitudepay.com/'][target='_blank'], img[src='.latitudepayapps.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'checkout.enabledpayments.latitudepay'),
    matchRegexInInnerHTML('script', 'wc_ga_pro.available_gateways.latitudepay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
