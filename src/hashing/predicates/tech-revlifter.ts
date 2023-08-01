import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.revlifter\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'RevLifterObject'),
    matchRegexInInnerHTML('script', 'revlifter'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
