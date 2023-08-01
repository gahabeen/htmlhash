import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.octaneai\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OctaneConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
