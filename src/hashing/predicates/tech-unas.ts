import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'UNAS.shop'),
    matchRegexInInnerHTML('script', 'unas_shop_url'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
