import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'BSmartConfirmWindow'),
    matchRegexInInnerHTML('script', 'bsGetBSmartStock'),
    matchRegexInInnerHTML('script', 'bsmartPriceList'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
