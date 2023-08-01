import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ayads\\.co/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'loadSublimeSkinz'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
