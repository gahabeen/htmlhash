import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Indexhibit'),
    // in scripts

    // in html
    matchRegex('<(?:link|a href) [^>]+ndxz-studio'),
    // in text

    // in css
])
