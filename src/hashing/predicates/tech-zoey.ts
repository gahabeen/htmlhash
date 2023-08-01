import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdna4\\.zoeysite\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Zoey.module'),
    matchRegexInInnerHTML('script', 'zoey.developer'),
    matchRegexInInnerHTML('script', 'zoeyDev'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
