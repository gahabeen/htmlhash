import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'Suggest\\.ff'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- Factfinder'),
    // in text

    // in css
])
