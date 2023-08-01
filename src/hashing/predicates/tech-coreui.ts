import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'coreui'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'webpackJsonp@coreui/coreui'),
    // in html

    // in text

    // in css
])
