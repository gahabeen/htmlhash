import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[id*='elementor-hello']`),
    matchSelector(`link[id*='hello-elementor']`),
    matchSelector(`script[id*='hello-elementor']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
