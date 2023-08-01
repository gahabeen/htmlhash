import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'static\\.simonsignal\\.com'),
    // in dom
    matchSelector(`link[href*='.simonsignal.com']`),
    // in js
    matchRegexInInnerHTML('script', 'SimonData'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
