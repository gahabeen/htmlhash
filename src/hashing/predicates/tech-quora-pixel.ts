import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.quora\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'qp.qp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
