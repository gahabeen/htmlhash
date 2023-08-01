import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FTB_API'),
    matchRegexInInnerHTML('script', 'FTB_AddEvent'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- \\* FreeTextBox v\\d \\((\\d+\\.\\d+\\.\\d+)\\;version:\\1'),
    // in text

    // in css
])
