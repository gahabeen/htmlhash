import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sprinthub\\.io/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SprintHUB'),
    matchRegexInInnerHTML('script', 'SprintHUBLoaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
