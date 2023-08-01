import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.thehuddle.nl/']`),
    // in js
    matchRegexInInnerHTML('script', 'HuddleEvent'),
    matchRegexInInnerHTML('script', 'HuddleUser'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
