import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.squareup\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SqPaymentForm'),
    matchRegexInInnerHTML('script', 'Square.Analytics'),
    matchRegexInInnerHTML('script', '__BOOTSTRAP_STATE__.storeInfo.square_application_id'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
