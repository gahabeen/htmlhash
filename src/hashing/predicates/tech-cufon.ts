import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cufon-yui\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Cufon'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
