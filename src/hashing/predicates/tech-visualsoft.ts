import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'vs_status_checker_version', '\\d+'),
    matchRegexInAttribute('meta', 'vsvatprices', ''),
    // in scripts

    // in html

    // in text

    // in css
])
