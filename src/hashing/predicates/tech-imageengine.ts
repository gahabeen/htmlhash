import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.imgeng.in/'], img[src*='.imgeng.in/'], img[data-src*='.imgeng.in/'], source[srcset*='.imgeng.in/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
