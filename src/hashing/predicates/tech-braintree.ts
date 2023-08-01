import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.braintreegateway\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Braintree'),
    matchRegexInInnerHTML('script', 'Braintree.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
