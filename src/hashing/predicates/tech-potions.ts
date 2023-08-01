import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.get-potions\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'potions.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
