import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\w+\\.healcode\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'HealcodeWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
