import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'acsbapp?\\.com/.*/acsb\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'acsb'),
    matchRegexInInnerHTML('script', 'acsbJS'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
