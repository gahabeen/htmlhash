import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '([\\d.]+)?/modernizr(?:\\.([\\d.]+))?.*\\.js\\;version:\\1?\\1:\\2'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Modernizr._version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
