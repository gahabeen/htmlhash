import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'shopOrdercallConfigStaticUrl'),
    matchRegexInInnerHTML('script', 'shop_cityselect.lib'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
