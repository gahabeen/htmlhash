import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'KM_COOKIE_DOMAIN'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
