import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'shopify\\.kount\\.net/js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ka.ClientSDK'),
    matchRegexInInnerHTML('script', 'ka.collectData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
