import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.thron.com/'], img[src*='.thron.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'THRONPlayer'),
    matchRegexInInnerHTML('script', 'thronHlsJs'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
