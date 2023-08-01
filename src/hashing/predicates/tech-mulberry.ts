import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.getmulberry\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'mulberry.cta'),
    matchRegexInInnerHTML('script', 'mulberryShop'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
