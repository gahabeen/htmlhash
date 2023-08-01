import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.ntv\\.io/'),
    matchRegexInAttribute('script', 'src', '\\.postrelease\\.com/'),
    // in dom
    matchSelector(`link[href*='.postrelease.com/'], img[src*='.postrelease.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'ntvConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
