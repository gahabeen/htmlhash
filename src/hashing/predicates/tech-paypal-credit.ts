import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.paypalobjects\\.com/.+/smart-credit-message@([\\d\\.]+)\\.js\\;version:\\1'),
    // in dom
    matchSelector(`img[alt*='PayPal Credit'], a[title*='PayPal Credit']`),
    // in js
    matchRegexInInnerHTML('script', 'PaypalOffersObject'),
    matchRegexInInnerHTML('script', 'payPalCreditPopover'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
