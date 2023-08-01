import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.k-ecommerce.com/'][target='_blank']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'k-eCommerce'),
    // in scripts

    // in html

    // in text

    // in css
])
