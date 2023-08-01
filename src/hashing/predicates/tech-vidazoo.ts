import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.vidazoo\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__vidazooPlayer__'),
    matchRegexInInnerHTML('script', 'vidazoo'),
    matchRegexInInnerHTML('script', 'vidazoo.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
