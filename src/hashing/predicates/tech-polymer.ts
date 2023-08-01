import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'polymer\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Polymer.version'),
    // in meta

    // in scripts

    // in html
    matchRegex('(?:<polymer-[^>]+|<link[^>]+rel="import"[^>]+/polymer\\.html")'),
    // in text

    // in css
])
