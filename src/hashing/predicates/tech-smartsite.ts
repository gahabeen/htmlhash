import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', 'Redacteur SmartInstant'),
    // in scripts

    // in html
    matchRegex('<[^>]+/smartsite\\.(?:dws|shtml)\\?id='),
    // in text

    // in css
])
