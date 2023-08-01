import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'debugbar.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'PhpDebugBar'),
    matchRegexInInnerHTML('script', 'phpdebugbar'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
