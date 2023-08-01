import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.olark\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'olark'),
    matchRegexInInnerHTML('script', 'olarkUserData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
