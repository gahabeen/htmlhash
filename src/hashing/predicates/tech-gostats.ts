import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_goStatsRun'),
    matchRegexInInnerHTML('script', '_go_track_src'),
    matchRegexInInnerHTML('script', 'go_msie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
