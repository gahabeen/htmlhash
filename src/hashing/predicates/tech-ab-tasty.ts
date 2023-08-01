import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'try\\.abtasty\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ABTasty'),
    matchRegexInInnerHTML('script', '_abtasty'),
    matchRegexInInnerHTML('script', 'loadABTasty'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
