import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.api\\.highstreetapp\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'highstreetBanner.config'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
