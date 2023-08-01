import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.jivosite\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jivo_api'),
    matchRegexInInnerHTML('script', 'jivo_version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
