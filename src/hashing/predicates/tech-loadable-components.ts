import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script#__LOADABLE_REQUIRED_CHUNKS__`),
    // in js
    matchRegexInInnerHTML('script', '__LOADABLE_LOADED_CHUNKS__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
