import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__adroll_consent'),
    matchRegexInInnerHTML('script', '__adroll_consent_is_gdpr'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
