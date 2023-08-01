import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'darkmode-js@([\\d\\.]+)/lib/darkmode-js\\.min\\.js\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Darkmode'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
