import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='fork-awesome.min.css']`),
    matchSelector(`link[href*='npm/fork-awesome']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
