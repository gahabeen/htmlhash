import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.nudgify\\.com/'),
    matchRegexInAttribute('script', 'src', 'cdn\\.convertize\\.com/nudgify-shopify\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'nudgify.cart'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
