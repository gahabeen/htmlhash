import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'xiti\\.com/hit\\.xiti'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'xt_click'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
