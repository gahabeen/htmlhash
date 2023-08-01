import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.convertkit\\.com'),
    // in dom
    matchSelector(`form[action*='.convertkit.com'], link[href*='.convertkit.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
