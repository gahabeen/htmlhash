import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Mxm.Basket'),
    matchRegexInInnerHTML('script', 'Mxm.FormHandler'),
    matchRegexInInnerHTML('script', 'Mxm.Tracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
