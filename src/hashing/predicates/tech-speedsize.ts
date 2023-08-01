import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/speedsize(?:-sw)?\\.js\\;confidence'),
    matchRegexInAttribute('script', 'src', '\\.speedsize\\.com/'),
    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'data-speedsize-(?:srcset|src|params)?'),
    // in html

    // in text

    // in css
])
