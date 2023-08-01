import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', '_robin_getRobinJs'),
    matchRegexInInnerHTML('script', 'robin_settings'),
    matchRegexInInnerHTML('script', 'robin_storage_settings'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
