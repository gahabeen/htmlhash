import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.newrelic.com']`),
    // in js
    matchRegexInInnerHTML('script', 'NREUM'),
    matchRegexInInnerHTML('script', 'newrelic'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
