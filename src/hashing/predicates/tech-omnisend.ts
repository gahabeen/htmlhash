import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'omnisrc\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_omnisend'),
    // in meta
    matchRegexInAttribute('meta', 'omnisend-site-verification', ''),
    // in scripts

    // in html

    // in text

    // in css
])
