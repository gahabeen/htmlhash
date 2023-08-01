import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'elk_forum_action'),
    matchRegexInInnerHTML('script', 'elk_iso_case_folding'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
