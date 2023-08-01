import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.fitanalytics\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FitAnalyticsWidget'),
    matchRegexInInnerHTML('script', '_fitAnalytics'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
