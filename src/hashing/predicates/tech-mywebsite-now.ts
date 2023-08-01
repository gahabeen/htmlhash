import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`img[src*='/-_-/res/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'MyWebsite NOW'),
    // in scripts

    // in html

    // in text

    // in css
])
