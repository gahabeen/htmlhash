import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`li.print-only`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'confluence-request-time', ''),
    // in scripts

    // in html

    // in text

    // in css
])
