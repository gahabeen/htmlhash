import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[rel='stylesheet'][href*='arsys.es/css/parking2.css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
