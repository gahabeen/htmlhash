import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[alt*='postnl' i], img[src*='postnl' i]`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text
    matchRegex('\\bPostNL\\b'),
    // in css
])
