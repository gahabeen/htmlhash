import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:\\.|//)siteimprove(?:analytics)?\\.com/js/siteanalyze'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_sz.analytics.heatmap'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
