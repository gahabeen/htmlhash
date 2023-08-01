import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'wc_ga_pro.available_gateways.poli'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
