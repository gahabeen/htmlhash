import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`script#vite-legacy-polyfill, script#vite-legacy-entry`),
    // in js
    matchRegexInInnerHTML('script', '__vite_is_modern_browser'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
