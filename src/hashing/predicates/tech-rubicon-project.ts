import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'https?://[^/]*\\.rubiconproject\\.com'),
    // in dom
    matchSelector(`iframe[src*='.rubiconproject.com']`),
    matchSelector(`img[src*='.rubiconproject.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
