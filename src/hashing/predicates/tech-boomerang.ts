import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BOOMR'),
    matchRegexInInnerHTML('script', 'BOOMR_lstart'),
    matchRegexInInnerHTML('script', 'BOOMR_mq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
