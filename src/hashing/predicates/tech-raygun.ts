import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.raygun\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Raygun'),
    matchRegexInInnerHTML('script', 'raygunEnabled'),
    matchRegexInInnerHTML('script', 'raygunFactory'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
