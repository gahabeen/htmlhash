import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#BorlabsCookieBox`),
    // in js
    matchRegexInInnerHTML('script', 'borlabsCookieConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
