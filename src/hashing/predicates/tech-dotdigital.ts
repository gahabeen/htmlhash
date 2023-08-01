import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js/_dmptv([\\d.]+)\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dmPt'),
    matchRegexInInnerHTML('script', 'dm_insight_id'),
    matchRegexInInnerHTML('script', 'dmtrackingobjectname'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
