import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.amplience.net'], img[src*='.amplience.net']`),
    // in js
    matchRegexInInnerHTML('script', 'amplianceTemplates'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
