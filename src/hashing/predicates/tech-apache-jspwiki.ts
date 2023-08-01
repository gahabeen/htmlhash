import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jspwiki'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<html[^>]* xmlns:jspwiki='),
    // in text

    // in css
])
