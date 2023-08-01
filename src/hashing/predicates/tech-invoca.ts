import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.dialogtech\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Invoca.PNAPI.version'),
    matchRegexInInnerHTML('script', 'InvocaTagId'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
