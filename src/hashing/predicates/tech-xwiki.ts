import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'wiki', 'xwiki'),
    // in scripts

    // in html
    matchRegex('<html[^>]data-xwiki-[^>]>'),
    // in text

    // in css
])
