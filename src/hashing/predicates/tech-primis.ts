import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sekindo\\.com'),
    // in dom
    matchSelector(`iframe[src*='.sekindo.com']`),
    matchSelector(`img[src*='.sekindo.com']`),
    // in js
    matchRegexInInnerHTML('script', 'SekindoNativeSkinApi'),
    matchRegexInInnerHTML('script', 'sekindoDisplayedPlacement'),
    matchRegexInInnerHTML('script', 'sekindoFlowingPlayerOn'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
