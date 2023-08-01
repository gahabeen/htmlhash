import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'dwin1\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AWIN.Tracking'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
