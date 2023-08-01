import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.firstimpression\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FI.options'),
    matchRegexInInnerHTML('script', 'fiPrebidAnalyticsHandler'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
