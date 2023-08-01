import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.salesmanago\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SalesmanagoObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
