import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'monotracker(?:\\.min)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_monoTracker'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
