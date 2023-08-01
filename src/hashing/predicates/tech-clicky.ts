import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.getclicky\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'clicky'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
