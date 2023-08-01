import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.gameball\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GbSdk.settings.shop'),
    matchRegexInInnerHTML('script', 'gbReferralCodeInput'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
