import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.fera\\.ai'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'fera'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
