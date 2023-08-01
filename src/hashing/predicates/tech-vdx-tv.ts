import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.tribalfusion\\.com/'),
    matchRegexInAttribute('script', 'src', '\\.exponential\\.com'),
    // in dom
    matchSelector(`link[href*='.tribalfusion.com'], link[href*='.exponential.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
