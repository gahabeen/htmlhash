import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ct_ultimate_gdpr_cookie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
