import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.legalmonster\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'legal.__VERSION__'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
