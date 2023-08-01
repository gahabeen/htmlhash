import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/files/gempagev\\d+\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GEMSTORE'),
    matchRegexInInnerHTML('script', 'GEMVENDOR'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
