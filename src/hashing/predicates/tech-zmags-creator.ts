import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'c(?:reator)?\\.zmags\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__zmags'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
