import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`body.theme-pearl`),
    // in js
    matchRegexInInnerHTML('script', 'Pearl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
