import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'tag\\.crsspxl\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'cp_C4w1ldN2d9PmVrkN'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
