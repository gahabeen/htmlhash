import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ScrollMagic'),
    matchRegexInInnerHTML('script', 'ScrollMagic.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
