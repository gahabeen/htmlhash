import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.qualtrics\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'QSI.ClientSideTargeting'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
