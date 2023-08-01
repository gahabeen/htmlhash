import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.pushcrew\\.\\w+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_pushcrewDebuggingQueue'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
