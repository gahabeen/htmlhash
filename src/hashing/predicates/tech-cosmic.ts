import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='.cosmicjs.com/'], img[src*='.cosmicjs.com/'], img[data-src*='.cosmicjs.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
