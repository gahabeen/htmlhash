import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.timify\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'TimifyWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
