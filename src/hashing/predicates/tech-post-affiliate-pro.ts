import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'postaffiliatepro\\.com/scripts/trackjs\\.js'),
    matchRegexInAttribute('script', 'src', '(?:affiliate|associate)\\..+/scripts/trackjs\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PostAffAction'),
    matchRegexInInnerHTML('script', 'PostAffCookie'),
    matchRegexInInnerHTML('script', 'PostAffInfo'),
    matchRegexInInnerHTML('script', 'PostAffTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
