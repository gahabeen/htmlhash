import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'blazor\\.server\\.js'),
    matchRegexInAttribute('script', 'src', 'blazor\\.host\\.min\\.js'),
    matchRegexInAttribute('script', 'src', 'blazor\\.webassembly\\.js'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
