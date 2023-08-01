import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.gumlet\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'gumlet'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
