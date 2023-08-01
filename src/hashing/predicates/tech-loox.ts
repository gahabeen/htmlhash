import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'loox\\.io/widget'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'loox_global_hash'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
