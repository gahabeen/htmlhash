import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/cfajax/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_cfEmails'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- START headerTags\\.cfm'),
    // in text

    // in css
])
