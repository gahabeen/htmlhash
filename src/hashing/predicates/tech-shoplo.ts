import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.shoplo\\.\\w+/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SHOPLOAJAX'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
