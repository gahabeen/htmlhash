import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sv-wc-payment-gateway-payment-form\\.js(?:\\?ver=([\\d.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sv_wc_payment_gateway_payment_form_param'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
