import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.usizy\\.es/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'uSizyUniversal'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
