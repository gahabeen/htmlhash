import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets-cdn\\.woowup\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WU._trackProductVTEXField'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
