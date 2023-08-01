import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.trynow\\.net/shopify/([\\d\\.]+)/\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TryNowConfig'),
    matchRegexInInnerHTML('script', 'tryNowCheckout'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
