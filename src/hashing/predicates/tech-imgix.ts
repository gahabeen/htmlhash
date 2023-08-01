import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='.imgix.net/'], img[data-src*='.imgix.net/'], img[srcset*='.imgix.net/'], source[src*='.imgix.net/'], source[data-src*='.imgix.net/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
