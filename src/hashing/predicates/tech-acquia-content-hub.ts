import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'content-hub\\.acquia\\.com'),
    // in dom
    matchSelector(`[data-lift-slot]`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
