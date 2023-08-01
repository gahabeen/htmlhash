import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.site24x7rum\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'S247RumQueueImpl'),
    matchRegexInInnerHTML('script', 's247RUM'),
    matchRegexInInnerHTML('script', 'site24x7RumError'),
    matchRegexInInnerHTML('script', 'site24x7rum'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
