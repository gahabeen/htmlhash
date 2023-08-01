import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn-spurit\\.com/shopify-apps/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Spurit.global.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
