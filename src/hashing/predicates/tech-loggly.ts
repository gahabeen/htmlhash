import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.loggly\\.com/'),
    // in dom
    matchSelector(`link[href*='.loggly.com']`),
    // in js
    matchRegexInInnerHTML('script', 'LogglyTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
