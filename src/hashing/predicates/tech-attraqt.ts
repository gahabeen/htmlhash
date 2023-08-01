import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.attraqt\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_attraqt'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
