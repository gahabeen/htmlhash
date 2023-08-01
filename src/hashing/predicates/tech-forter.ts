import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'forter\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ftr__startScriptLoad'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
