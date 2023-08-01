import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ZestMoneyWidget'),
    matchRegexInInnerHTML('script', 'zestBind'),
    matchRegexInInnerHTML('script', 'zestMerchant'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
