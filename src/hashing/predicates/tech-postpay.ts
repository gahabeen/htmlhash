import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.postpay\\.io/(?:.+\\?ver=([\\d\\.]+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PostpayJsConfig'),
    matchRegexInInnerHTML('script', 'postpay'),
    matchRegexInInnerHTML('script', 'wc_postpay_init_params'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
