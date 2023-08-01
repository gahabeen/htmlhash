import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<a href="http://www\\.tsoft\\.com\\.tr" target="_blank" title="T-Soft E-ticaret Sistemleri">'),
    // in text

    // in css
])
