import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jss_1stepDeliveryType'),
    matchRegexInInnerHTML('script', 'jss_1stepFillShipping'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
