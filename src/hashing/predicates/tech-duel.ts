import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.duel\\.me/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'DUEL.apiURL'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
