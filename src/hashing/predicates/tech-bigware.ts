import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('(?:Diese <a href=[^>]+bigware\\.de|<a href=[^>]+/main_bigware_\\d+\\.php)'),
    // in text

    // in css
])
