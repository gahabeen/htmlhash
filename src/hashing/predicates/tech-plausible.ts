import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'plausible\\.io/js/plausible\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'plausible'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
