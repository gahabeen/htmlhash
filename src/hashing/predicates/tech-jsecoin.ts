import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^(?:https):?//load\\.jsecoin\\.com/load/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jseMine'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
