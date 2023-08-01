import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.jobadder\\.com/'),
    // in dom
    matchSelector(`a[href*='clientapps.jobadder.com/'], link[href*='jobadder.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
