import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'dataTables.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$.fn.dataTable.version'),
    matchRegexInInnerHTML('script', 'jQuery.fn.dataTable.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
