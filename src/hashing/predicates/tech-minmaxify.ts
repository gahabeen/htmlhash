import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'minMaxify.checkLimits'),
    matchRegexInInnerHTML('script', 'minMaxify.shop'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
