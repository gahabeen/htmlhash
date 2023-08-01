import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.convertexperiments\\.com/js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'convert'),
    matchRegexInInnerHTML('script', 'convertData'),
    matchRegexInInnerHTML('script', 'convert_temp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
