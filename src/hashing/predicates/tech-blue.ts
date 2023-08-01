import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.getblue\\.io'),
    // in dom
    matchSelector(`iframe[src*='.getblue.io']`),
    // in js
    matchRegexInInnerHTML('script', 'blueProductId'),
    matchRegexInInnerHTML('script', 'bluecpy_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
