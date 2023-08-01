import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link#eventon_dynamic_styles-css, link[href*='/css/eventon_styles\.css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
