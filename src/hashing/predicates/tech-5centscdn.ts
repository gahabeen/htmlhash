import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.5centscdn\\.com/'),
    // in dom
    matchSelector(`link[href*='.5centscdn.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
