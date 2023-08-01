import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'googleoptimize\\.com/optimize\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'google_optimize'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
