import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.afterbuy\\.de/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'AfterbuyString'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
