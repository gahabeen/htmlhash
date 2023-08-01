import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.chaport\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'chaport'),
    matchRegexInInnerHTML('script', 'chaportConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
