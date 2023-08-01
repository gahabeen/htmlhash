import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.webengage\\.co(?:m)?/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'webengage.__v'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
