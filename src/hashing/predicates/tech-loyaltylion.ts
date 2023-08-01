import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sdk\\.loyaltylion\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'loyaltylion.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
