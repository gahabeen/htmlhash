import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='ct.pinterest.com/v3/?tid']`),
    // in js
    matchRegexInInnerHTML('script', 'pintrk'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
