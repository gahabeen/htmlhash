import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#pb-root`),
    // in js
    matchRegexInInnerHTML('script', 'Fusion.arcSite'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
