import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'oxCookieNote'),
    matchRegexInInnerHTML('script', 'oxInputValidator'),
    matchRegexInInnerHTML('script', 'oxLoginBox'),
    matchRegexInInnerHTML('script', 'oxMiniBasket'),
    matchRegexInInnerHTML('script', 'oxModalPopup'),
    matchRegexInInnerHTML('script', 'oxTopMenu'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
