import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(turf@[\\d.]+)?/?turf\\.min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'turf.feature'),
    matchRegexInInnerHTML('script', 'turf.point'),
    matchRegexInInnerHTML('script', 'turf.random'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
