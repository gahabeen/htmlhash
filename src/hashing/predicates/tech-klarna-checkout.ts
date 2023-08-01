import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.klarnaservices\\.com/lib\\.js'),
    // in dom
    matchSelector(`[aria-labelledby='pi-klarna']`),
    // in js
    matchRegexInInnerHTML('script', 'KlarnaOnsiteService'),
    matchRegexInInnerHTML('script', '_klarnaCheckout'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
