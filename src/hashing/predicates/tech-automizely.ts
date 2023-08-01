import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.automizely\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AM_CONSENT_SDK.product'),
    matchRegexInInnerHTML('script', 'amStorefrontKit.hRequestEventTarget'),
    matchRegexInInnerHTML('script', 'automizelyConversions'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
