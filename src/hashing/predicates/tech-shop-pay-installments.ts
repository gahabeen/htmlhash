import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`.shopify-installments__learn-more, .shopify-installments, #shopify-installments-cta`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
