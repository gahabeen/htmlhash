import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`style[id='__FRSH_TWIND']`),
    matchSelector(`style[id='__FRSH_STYLE']`),
    matchSelector(`script[id='__FRSH_STATE']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
