import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.contlo\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'CONTLO_ENV'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
