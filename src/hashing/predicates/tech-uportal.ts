import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'uportal'),
    // in meta
    matchRegexInAttribute('meta', 'description', ' uPortal '),
    // in scripts

    // in html

    // in text

    // in css
])
