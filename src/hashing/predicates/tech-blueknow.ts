import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.blueknow\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Blueknow'),
    matchRegexInInnerHTML('script', 'BlueknowTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
