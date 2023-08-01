import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.inspectlet\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__insp'),
    matchRegexInInnerHTML('script', '__inspld'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- (?:Begin|End) Inspectlet Embed Code -->'),
    // in text

    // in css
])
