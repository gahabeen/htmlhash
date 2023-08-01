import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.qualaroo\\.com'),
    // in dom
    matchSelector(`link[href*='.qualaroo.com']`),
    // in js
    matchRegexInInnerHTML('script', 'QUALAROO_DNT'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
