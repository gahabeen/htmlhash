import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Blitz'),
    matchRegexInInnerHTML('script', 'blitzReplace'),
    // in meta

    // in scripts

    // in html
    matchRegex('<!-- Cached by Blitz on'),
    // in text

    // in css
])
