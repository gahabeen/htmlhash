import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.izooto\\.\\w+'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Izooto'),
    matchRegexInInnerHTML('script', '_izooto'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
