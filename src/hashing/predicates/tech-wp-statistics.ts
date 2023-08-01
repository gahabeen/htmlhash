import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/wp-statistics/']`),
    // in js
    matchRegexInInnerHTML('script', 'WP_Statistics_http'),
    matchRegexInInnerHTML('script', 'wps_statistics_object'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- Analytics by WP-Statistics v([\\d\\.]+)\\;version:\\1'),
    // in text

    // in css
])
