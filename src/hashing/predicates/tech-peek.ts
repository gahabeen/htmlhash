import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.peek\\.\\w+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Peek'),
    matchRegexInInnerHTML('script', 'PeekJsApi'),
    matchRegexInInnerHTML('script', '_peekConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
