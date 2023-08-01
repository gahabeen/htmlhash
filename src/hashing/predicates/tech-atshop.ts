import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.atshop\\.io'),
    // in dom
    matchSelector(`link[href*='cdn.atshop.io']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
