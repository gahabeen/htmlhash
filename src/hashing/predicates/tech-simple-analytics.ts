import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'simpleanalyticscdn\\.com'),
    matchRegexInAttribute('script', 'src', 'simpleanalytics\\.io'),
    matchRegexInAttribute('script', 'src', 'simpleanalytics\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sa_event'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
