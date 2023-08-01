import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.omniconvert\\.com'),
    // in dom
    matchSelector(`link[href*='app.omniconvert.com']`),
    // in js
    matchRegexInInnerHTML('script', '_omni'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
