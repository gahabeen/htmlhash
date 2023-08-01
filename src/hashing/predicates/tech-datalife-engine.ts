import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'dle_root'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'DataLife Engine'),
    // in scripts

    // in html

    // in text

    // in css
])
