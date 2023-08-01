import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//scripttags\\.justuno\\.com/shopify_justuno'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
