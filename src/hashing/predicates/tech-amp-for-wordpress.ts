import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='/wp-content/plugins/amp/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^AMP Plugin v(\\d+\\.\\d+.*)$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
