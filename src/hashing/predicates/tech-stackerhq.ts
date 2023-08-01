import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='cdn.stackerhq.com/']`),
    // in js
    matchRegexInInnerHTML('script', 'stacker.install_feature'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
