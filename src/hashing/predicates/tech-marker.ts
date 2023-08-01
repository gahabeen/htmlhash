import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'edge\\.marker\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'markerConfig'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
