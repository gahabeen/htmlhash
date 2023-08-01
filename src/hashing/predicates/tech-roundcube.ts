import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'rcmail'),
    matchRegexInInnerHTML('script', 'roundcube'),
    // in meta

    // in scripts

    // in html
    matchRegex('<title>RoundCube'),
    // in text

    // in css
])
