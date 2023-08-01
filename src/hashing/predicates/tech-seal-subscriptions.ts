import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sealsubscriptions\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SealSubs.checkout'),
    matchRegexInInnerHTML('script', 'sealsubscriptions_settings_updated'),
    matchRegexInInnerHTML('script', 'sealsubsloaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
