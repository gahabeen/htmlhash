import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'fe_eclass'),
    matchRegexInInnerHTML('script', 'fe_eclass_guest'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
