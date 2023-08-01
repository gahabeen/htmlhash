import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.histats.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Histats.ver'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
