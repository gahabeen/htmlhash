import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.fullstory\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FS.clearUserCookie'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
