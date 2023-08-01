import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:shopify-)?cdn\\.flow\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'flow.cart'),
    matchRegexInInnerHTML('script', 'flow.countryPicker'),
    matchRegexInInnerHTML('script', 'flow_cart_localize'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
