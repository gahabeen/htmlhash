import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'storage\\.googleapis\\.com/dito/sdk\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dito.AppSettings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
