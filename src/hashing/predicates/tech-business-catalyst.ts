import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'CatalystScripts'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- BC_OBNW -->'),
    // in text

    // in css
])
