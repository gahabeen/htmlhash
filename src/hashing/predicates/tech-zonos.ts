import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.zonos\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Zonos'),
    matchRegexInInnerHTML('script', 'zonos'),
    matchRegexInInnerHTML('script', 'zonosCheckout'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
