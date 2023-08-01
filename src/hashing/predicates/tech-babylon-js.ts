import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`canvas[data-engine*='Babylon.js']`),
    // in js
    matchRegexInInnerHTML('script', 'BABYLON.AddressMode'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
