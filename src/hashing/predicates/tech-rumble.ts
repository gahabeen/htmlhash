import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='//rumble.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'Rumble.gdpr'),
    matchRegexInInnerHTML('script', 'Rumble.resize'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
