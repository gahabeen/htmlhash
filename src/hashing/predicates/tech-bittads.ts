import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'bittads\\.com/js/bitt\\.js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bitt'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
