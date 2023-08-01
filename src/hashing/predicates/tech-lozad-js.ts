import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'lozad'),
    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '/lozad\\.min\\.js'),
    // in html

    // in text

    // in css
])
