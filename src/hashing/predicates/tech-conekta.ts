import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'conektaapi/v([\\d.]+)\\;version:\\1'),
    matchRegexInAttribute('script', 'src', 'cdn\\.conekta\\.\\w+/js/(?:v([\\d.]+)|)\\;version:\\1'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
