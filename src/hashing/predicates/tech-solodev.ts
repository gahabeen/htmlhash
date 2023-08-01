import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<div class=["\']dynamicDiv["\'] id=["\']dd\\.\\d\\.\\d(?:\\.\\d)?["\']>'),
    // in text

    // in css
])
