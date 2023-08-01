import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ebisu.FontChanger'),
    matchRegexInInnerHTML('script', 'Ebisu.FontChanger.map.L'),
    matchRegexInInnerHTML('script', 'ebisu_conv'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
