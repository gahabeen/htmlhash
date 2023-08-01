import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.donorperfect\\.net/'),
    // in dom
    matchSelector(`a[href*='.donorperfect.']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
