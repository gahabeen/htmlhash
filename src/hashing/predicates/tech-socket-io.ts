import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'socket\\.io.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'io.Socket'),
    matchRegexInInnerHTML('script', 'io.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
