import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.liadm\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'LI.advertiserId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
