import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.yellowmessenger\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ymConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
