import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.smg\\.com/'),
    // in dom
    matchSelector(`link[href*='api.smg.com']`),
    // in js
    matchRegexInInnerHTML('script', 'smgETrackParams'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
