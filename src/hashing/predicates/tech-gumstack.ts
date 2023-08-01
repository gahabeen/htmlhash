import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'w\\.gumstack\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Gumstack'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
