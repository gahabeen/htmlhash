import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`link[href*='//teambrain.app/']`),
    // in js
    matchRegexInInnerHTML('script', 'TeamBrainExternalApp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
