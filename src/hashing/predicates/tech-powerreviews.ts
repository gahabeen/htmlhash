import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ui\\.powerreviews\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'POWERREVIEWS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
