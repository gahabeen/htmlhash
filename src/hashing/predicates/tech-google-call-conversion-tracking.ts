import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gstatic\\.com/call-tracking/.+\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_googCallTrackingImpl'),
    matchRegexInInnerHTML('script', 'google_wcc_status'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
