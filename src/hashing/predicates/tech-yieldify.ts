import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.yieldify\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_yieldify'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
