import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'code\\.buywithprime\\.amazon\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bwp.sku'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
