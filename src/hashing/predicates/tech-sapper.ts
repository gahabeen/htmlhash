import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '__SAPPER__'),
    // in meta

    // in scripts

    // in html
    matchRegex('<script[^>]*>__SAPPER__'),
    // in text

    // in css
])
