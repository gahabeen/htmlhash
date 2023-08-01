import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`[data-reflex]`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '\\.stimulate'),
    // in html

    // in text

    // in css
])
