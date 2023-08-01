import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'partial\\.ly'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PartiallyButton'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
