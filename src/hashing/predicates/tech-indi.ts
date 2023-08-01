import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'indi.formatStats'),
    matchRegexInInnerHTML('script', 'indiCountly.check_any_consent'),
    matchRegexInInnerHTML('script', 'indi_carousel.productCta'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
