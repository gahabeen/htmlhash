import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tolt\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'toltAPI'),
    matchRegexInInnerHTML('script', 'tolt_referral'),
    matchRegexInInnerHTML('script', 'toltio'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
