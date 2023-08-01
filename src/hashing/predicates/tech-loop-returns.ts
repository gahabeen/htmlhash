import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.loopreturns.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Loop.config.variantParam'),
    matchRegexInInnerHTML('script', 'LoopOnstore'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
