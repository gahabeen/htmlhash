import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 't\\.afi-b\\.com'),
    // in dom
    matchSelector(`img[src*='www.afi-b.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
