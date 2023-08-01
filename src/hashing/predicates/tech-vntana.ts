import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='embed.vntana.com/'], iframe[nitro-lazy-src*='embed.vntana.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])