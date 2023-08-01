import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.resmio\\.\\w+/static/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ResmioButton'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
