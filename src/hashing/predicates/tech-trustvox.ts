import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TrustvoxCertificateWidget'),
    matchRegexInInnerHTML('script', 'TrustvoxRatesWidget'),
    matchRegexInInnerHTML('script', '_trustvox'),
    matchRegexInInnerHTML('script', '_trustvox_colt'),
    matchRegexInInnerHTML('script', '_trustvox_shelf_rate'),
    matchRegexInInnerHTML('script', 'trustvox_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
