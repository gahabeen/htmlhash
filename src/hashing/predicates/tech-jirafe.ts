import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/jirafe\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jirafe'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
