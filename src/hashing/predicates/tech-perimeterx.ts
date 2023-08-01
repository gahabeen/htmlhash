import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'client\\.a\\.pxi\\.pub/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_pxAppId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
