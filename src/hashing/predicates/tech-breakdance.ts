import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BreakdanceFrontend'),
    matchRegexInInnerHTML('script', 'BreakdanceHeaderBuilder'),
    matchRegexInInnerHTML('script', 'BreakdanceSwiper'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
