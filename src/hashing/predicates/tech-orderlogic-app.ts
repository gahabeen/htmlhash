import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OrderLogic.ALERTS_KEY'),
    matchRegexInInnerHTML('script', 'OrderLogic.DEFAULT_MONEY_FORMAT'),
    matchRegexInInnerHTML('script', 'OrderLogic.cartData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
