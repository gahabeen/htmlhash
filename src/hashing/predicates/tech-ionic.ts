import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Ionic.config'),
    matchRegexInInnerHTML('script', 'Ionic.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
