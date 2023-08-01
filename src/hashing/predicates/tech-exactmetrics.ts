import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/wp-content/plugins/google-analytics-dashboard-for-wp/.+\\.js(?:\\?ver=(\\d+(?:\\.\\d+)+))?\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ExactMetrics'),
    matchRegexInInnerHTML('script', 'exactmetrics_frontend'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
