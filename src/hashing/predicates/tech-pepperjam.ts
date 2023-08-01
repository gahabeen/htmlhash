import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.pepperjam\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Pepperjam'),
    matchRegexInInnerHTML('script', 'PepperjamTracking'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
