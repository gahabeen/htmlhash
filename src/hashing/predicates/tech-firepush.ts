import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.firepush\\.\\w+'),
    matchRegexInAttribute('script', 'src', 'fpcdn\\.me/.+shopify'),
    // in dom
    matchSelector(`link[href*='cdn.firepush.net']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
