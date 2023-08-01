import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+rel=["\']web-socket["\']'),
    matchRegex('<(?:link|a)[^>]+href=["\']wss?://'),
    // in text

    // in css
])
