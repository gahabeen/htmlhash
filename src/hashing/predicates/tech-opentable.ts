import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`iframe[src*='.opentable.com/'], form[action*='.opentable.com/'][target='_blank']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
