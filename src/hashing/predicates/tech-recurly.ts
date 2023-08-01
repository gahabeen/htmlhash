import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.recurly\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'recurly.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('<input[^>]+data-recurly'),
    // in text

    // in css
])
