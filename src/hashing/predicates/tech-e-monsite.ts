import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^e-monsite\\s\\(e-monsite\\.com\\)$'),
    // in scripts

    // in html

    // in text

    // in css
])
