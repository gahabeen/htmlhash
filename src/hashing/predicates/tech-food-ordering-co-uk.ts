import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'GetOrderAcceptFor'),
    matchRegexInInnerHTML('script', 'StoreToC'),
    matchRegexInInnerHTML('script', 'disablecollection'),
    matchRegexInInnerHTML('script', 'disabledelivery'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
