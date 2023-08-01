import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tags\\.affiliatefuture\\.com'),
    // in dom
    matchSelector(`img[src*='banners.affiliatefuture.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
