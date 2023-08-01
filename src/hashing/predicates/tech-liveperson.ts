import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.(?:liveperson|contactatonce)?\\.(?:com|net|co\\.uk)/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'lpTag.Chronos'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
