import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.myshopapps\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'iStockUrl'),
    matchRegexInInnerHTML('script', 'iWishUrl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
