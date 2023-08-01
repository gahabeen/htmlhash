import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.qualified\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'QualifiedObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
