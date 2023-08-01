import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:adinterax|adserver\\.yahoo)\\.com'),
    // in dom
    matchSelector(`link[href*='bc.yahoo.com']`),
    // in js
    matchRegexInInnerHTML('script', 'adxinserthtml'),
    matchRegexInInnerHTML('script', 'yahooCvLoad'),
    matchRegexInInnerHTML('script', 'yahoo_retargeting_pv_id'),
    matchRegexInInnerHTML('script', 'yahoo_ydn_conv_label'),
    matchRegexInInnerHTML('script', 'yahoo_ydn_conv_transaction_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
