import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'wp-content/plugins/athena-search'),
    // in dom
    matchSelector(`link[href*='athena/autocomplete/css/autocomplete.css']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
