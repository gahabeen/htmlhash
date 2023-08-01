import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Classy.clientId'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'classy\\.org'),
    // in html

    // in text

    // in css
])
