import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.uptrendsdata\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'UTBOOMR.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
