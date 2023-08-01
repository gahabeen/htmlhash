import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.gethypervisual\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'hypervisualPreflight'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
