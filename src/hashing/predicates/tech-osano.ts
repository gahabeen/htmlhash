import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cmp\\.osano\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Osano'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
