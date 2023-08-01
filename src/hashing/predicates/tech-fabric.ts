import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[data-src*='fabric.imgix.net/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'powered-by', 'FabricInc'),
    // in scripts

    // in html

    // in text

    // in css
])
