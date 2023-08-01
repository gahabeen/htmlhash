import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\./qa-content/qa-page\\.js\\?([0-9.]+)\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<!-- Powered by Question2Answer'),
    // in text

    // in css
])
