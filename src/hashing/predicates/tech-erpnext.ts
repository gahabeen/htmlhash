import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'erpnext.shopping_cart'),
    matchRegexInInnerHTML('script', 'erpnext.subscribe_to_newsletter'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
