import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.datatrics.com']`),
    // in js
    matchRegexInInnerHTML('script', 'datatricsEvents'),
    matchRegexInInnerHTML('script', 'DatatricsClick'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
