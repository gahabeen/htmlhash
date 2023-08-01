import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.trustindex.io/']`),
    // in js
    matchRegexInInnerHTML('script', 'Trustindex'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
