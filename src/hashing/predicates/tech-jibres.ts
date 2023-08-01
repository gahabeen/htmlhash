import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/jibres\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'jibres'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'Jibres'),
    // in scripts

    // in html

    // in text

    // in css
])
