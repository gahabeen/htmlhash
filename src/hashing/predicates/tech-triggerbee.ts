import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 't\\.myvisitors\\.se'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'triggerbee'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
