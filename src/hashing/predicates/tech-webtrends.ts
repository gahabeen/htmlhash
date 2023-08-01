import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WTOptimize'),
    matchRegexInInnerHTML('script', 'WebTrends'),
    // in meta

    // in scripts

    // in html
    matchRegex('<img[^>]+id="DCSIMG"[^>]+webtrends'),
    // in text

    // in css
])
