import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:choices|cache)\\.consentframework\\.com/'),
    matchRegexInAttribute('script', 'src', 'js\\.sddan\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SDDAN.cmp'),
    matchRegexInInnerHTML('script', 'Sddan.cmpLoaded'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
