import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BMAP_API_VERSION'),
    matchRegexInInnerHTML('script', 'bmap.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
