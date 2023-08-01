import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.segment\\.com/analytics\\.js'),
    matchRegexInAttribute('script', 'src', '/segment-wrapper\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__SEGMENT_INSPECTOR__'),
    matchRegexInInnerHTML('script', 'analytics.SNIPPET_VERSION'),
    matchRegexInInnerHTML('script', 'analytics.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
