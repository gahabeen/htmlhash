import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'OWA.config.baseUrl'),
    matchRegexInInnerHTML('script', 'owa_baseUrl'),
    matchRegexInInnerHTML('script', 'owa_cmds'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- (?:Start|End) Open Web Analytics Tracker -->'),
    // in text

    // in css
])
