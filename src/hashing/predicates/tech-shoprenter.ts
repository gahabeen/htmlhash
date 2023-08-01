import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.cdn\\.shoprenter\\.hu/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ShopRenter.customer'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
