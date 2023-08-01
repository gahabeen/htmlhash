import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '[^a-z]mtc.*\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'MauticTrackingObject'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
