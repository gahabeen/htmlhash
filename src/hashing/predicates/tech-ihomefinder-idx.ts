import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.idxhome\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ihfJquery'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
