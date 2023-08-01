import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='bulma']`),
    // in js
    matchRegexInInnerHTML('script', 'Bulma.VERSION'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
