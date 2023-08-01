import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='api.relewise.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'relewiseConfig'),
    matchRegexInInnerHTML('script', 'relewiseTracking'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
