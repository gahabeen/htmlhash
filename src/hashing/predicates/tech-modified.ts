import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '\\(c\\) by modified eCommerce Shopsoftware ------ http://www\\.modified-shop\\.org'),
    // in scripts

    // in html

    // in text

    // in css
])
