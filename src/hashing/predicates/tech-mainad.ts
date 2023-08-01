import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.mainadv\\.com/'),
    // in dom
    matchSelector(`iframe[src*='.mainadv.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
