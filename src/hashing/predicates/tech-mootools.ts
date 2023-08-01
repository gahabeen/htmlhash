import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mootools.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MooTools'),
    matchRegexInInnerHTML('script', 'MooTools.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
