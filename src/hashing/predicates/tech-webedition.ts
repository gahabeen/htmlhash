import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'DC.title', 'webEdition'),
    matchRegexInAttribute('meta', 'generator', 'webEdition'),
    // in scripts

    // in html

    // in text

    // in css
])
