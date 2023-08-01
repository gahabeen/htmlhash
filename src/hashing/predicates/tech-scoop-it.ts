import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='.scoop.it/'], a[href*='.scoop.it/'][target='_blank']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
