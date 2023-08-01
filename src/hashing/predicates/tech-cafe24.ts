import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EC_GLOBAL_DATETIME'),
    matchRegexInInnerHTML('script', 'EC_GLOBAL_INFO'),
    matchRegexInInnerHTML('script', 'EC_ROOT_DOMAIN'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
