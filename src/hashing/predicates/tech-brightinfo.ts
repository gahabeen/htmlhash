import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'app\\.brightinfo\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_BI_'),
    matchRegexInInnerHTML('script', '_biq'),
    matchRegexInInnerHTML('script', 'biJsUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
