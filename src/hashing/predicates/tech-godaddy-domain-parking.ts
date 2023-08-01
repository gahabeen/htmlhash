import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'wsimg\\.com/parking-lander'),
    // in html

    // in text

    // in css
])
