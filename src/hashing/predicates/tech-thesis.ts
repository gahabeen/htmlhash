import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'thix\\.ttsep\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'thix.history'),
    matchRegexInInnerHTML('script', 'thix.t'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
