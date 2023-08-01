import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wxyz\\.rb\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RB.source'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
