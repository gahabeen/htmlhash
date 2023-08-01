import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'snoobi\\.com/snoop\\.php'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'snoobi'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
