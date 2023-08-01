import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.tomtom\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'tomtom.Map'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
