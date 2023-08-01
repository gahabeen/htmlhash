import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'grin-sdk\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Grin'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
