import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`figure[style*='wp-content/uploads']`),
    matchSelector(`img[src*='wp-content/uploads'], img[srcset*='wp-content/uploads'], source[srcset*='wp-content/uploads']`),
    matchSelector(`style`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
