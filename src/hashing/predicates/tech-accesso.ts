import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/embed/accesso\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'accesso'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
