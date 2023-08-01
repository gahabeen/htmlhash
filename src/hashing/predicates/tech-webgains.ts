import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'analytics\\.webgains\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ITCLKQ'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
