import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'gtranslate\\.io/shopify/'),
    // in dom
    matchSelector(`img[src*='gtranslate.io/shopify']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
