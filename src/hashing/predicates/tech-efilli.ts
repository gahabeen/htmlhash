import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'EFILLI_GLOBAL_OPTIONS'),
    matchRegexInInnerHTML('script', 'Efilli'),
    matchRegexInInnerHTML('script', 'efilli.__cookieBlocker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
