import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widgets\\.resy\\.\\w+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'resyWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
