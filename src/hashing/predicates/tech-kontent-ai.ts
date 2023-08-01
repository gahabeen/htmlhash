import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.kc-usercontent.com'], link[href*='.kc-usercontent.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
