import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.walkme.com']`),
    // in js
    matchRegexInInnerHTML('script', 'WalkMeAPI'),
    matchRegexInInnerHTML('script', '_walkmeConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
