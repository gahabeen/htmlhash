import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'USER_DELETE_ADDRESS'),
    matchRegexInInnerHTML('script', 'USER_DELETE_PAYMENT_PROFILE'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
