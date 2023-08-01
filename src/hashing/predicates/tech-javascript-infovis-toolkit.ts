import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'jit(?:-yc)?\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '$jit'),
    matchRegexInInnerHTML('script', '$jit.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
