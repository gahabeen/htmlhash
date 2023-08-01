import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.ordersify\\.com/sdk/productalerts-shopify\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ORDERSIFY_BIS.stockRemainingSetting'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
