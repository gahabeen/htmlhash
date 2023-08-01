import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'mg-(?:core|plugins|templates)/'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<link[^>]+href=["\'][^"]+mg-(?:core|plugins|templates)/'),
    // in text

    // in css
])
