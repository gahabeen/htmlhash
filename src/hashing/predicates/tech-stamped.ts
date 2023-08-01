import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.stamped\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'StampedFn'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
