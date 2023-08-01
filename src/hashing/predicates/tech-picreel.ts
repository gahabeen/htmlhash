import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.picreel\\.com'),
    // in dom
    matchSelector(`iframe[src*='app.picreel.com']`),
    // in js
    matchRegexInInnerHTML('script', 'picreel'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
