import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/stackable-ultimate-gutenberg-blocks']`),
    // in js
    matchRegexInInnerHTML('script', 'stackable.restUrl'),
    matchRegexInInnerHTML('script', 'stackableAnimations'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
