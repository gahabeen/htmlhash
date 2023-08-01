import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.iamport\\.kr/js/iamport\\.payment-([\\d\\.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'IMP.request_pay'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
