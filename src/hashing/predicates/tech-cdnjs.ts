import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdnjs\\.cloudflare\\.com'),
    // in dom
    matchSelector(`link[href*='cdnjs.cloudflare.com/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
