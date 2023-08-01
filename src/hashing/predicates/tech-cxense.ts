import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cxense\\.com/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'cXenseParse:itm-meta-keywords', ''),
    matchRegexInAttribute('meta', 'cXenseParse:pageclass', ''),
    matchRegexInAttribute('meta', 'cXenseParse:publishtime', ''),
    matchRegexInAttribute('meta', 'cXenseParse:url', ''),
    // in scripts

    // in html

    // in text

    // in css
])
