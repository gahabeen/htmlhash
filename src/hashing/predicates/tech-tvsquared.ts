import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.tvsquared.com']`),
    // in js
    matchRegexInInnerHTML('script', 'TV2Track'),
    matchRegexInInnerHTML('script', '_tvq'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
