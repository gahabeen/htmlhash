import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.clerk\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__clerk_cb_0'),
    matchRegexInInnerHTML('script', '__clerk_q'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
