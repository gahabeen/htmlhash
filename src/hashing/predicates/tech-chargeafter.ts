import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.chargeafter\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ChargeAfter'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
