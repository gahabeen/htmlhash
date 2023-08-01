import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'dedeajax'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DedeContainer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
