import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WebtrekkV3'),
    matchRegexInInnerHTML('script', 'webtrekk'),
    matchRegexInInnerHTML('script', 'webtrekkConfig'),
    matchRegexInInnerHTML('script', 'webtrekkHeatmapObjects'),
    matchRegexInInnerHTML('script', 'webtrekkLinktrackObjects'),
    matchRegexInInnerHTML('script', 'webtrekkUnloadObjects'),
    matchRegexInInnerHTML('script', 'webtrekkV3'),
    matchRegexInInnerHTML('script', 'wtSmart'),
    matchRegexInInnerHTML('script', 'wt_tt'),
    matchRegexInInnerHTML('script', 'wt_ttv2'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
