import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'apps\\.paidy\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Constants.paidy'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
