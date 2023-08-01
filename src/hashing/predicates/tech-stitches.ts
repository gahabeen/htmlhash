import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`style#stitches`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^c-[A-Za-z]{5}$'),
    // in scripts

    // in html

    // in text

    // in css
])
