import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.cloud\\.coveo\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Coveo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
