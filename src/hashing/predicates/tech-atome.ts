import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gateway\\.apaylater\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'atomeWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
