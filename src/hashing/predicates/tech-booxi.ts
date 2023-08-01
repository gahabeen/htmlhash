import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/bxe_core\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'booxi'),
    matchRegexInInnerHTML('script', 'booxiController'),
    matchRegexInInnerHTML('script', 'bxe_core'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
