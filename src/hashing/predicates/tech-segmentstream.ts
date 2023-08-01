import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.segmentstream\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'segmentstream.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
