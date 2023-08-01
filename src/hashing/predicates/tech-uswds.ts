import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\buswds\\b'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'uswdsPresent'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
