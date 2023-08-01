import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^nopCommerce$'),
    // in scripts

    // in html
    matchRegex('(?:<!--Powered by nopCommerce|Powered by: <a[^>]+nopcommerce)'),
    // in text

    // in css
])
