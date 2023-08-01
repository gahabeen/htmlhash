import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.linximpulse.net']`),
    // in js
    matchRegexInInnerHTML('script', 'linx.banner'),
    matchRegexInInnerHTML('script', 'linxImpulse.config'),
    matchRegexInInnerHTML('script', 'linxImpulseInitialized'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
