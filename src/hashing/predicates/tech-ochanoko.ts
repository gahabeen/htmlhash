import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ocnk-min\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ocnkProducts'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
