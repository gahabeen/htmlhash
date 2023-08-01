import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/amazonpayments(?:\\.min)?\\.js'),
    matchRegexInAttribute('script', 'src', '\\.payments-amazon\\.com/'),
    // in dom
    matchSelector(`img[src*='amazonpay'], [aria-labelledby='pi-amazon'], meta[id='amazon-payments-metadata'], [data-amazon-payments='true']`),
    // in js
    matchRegexInInnerHTML('script', 'AmazonPayments'),
    matchRegexInInnerHTML('script', 'OffAmazonPayments'),
    matchRegexInInnerHTML('script', 'enableAmazonPay'),
    matchRegexInInnerHTML('script', 'onAmazonPaymentsReady'),
    // in meta
    matchRegexInAttribute('meta', 'id', 'amazon-payments-metadata'),
    // in scripts

    // in html

    // in text

    // in css
])
