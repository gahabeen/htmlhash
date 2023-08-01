import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.wirecard\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WirecardHPP'),
    matchRegexInInnerHTML('script', 'WirecardPaymentPage'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
