import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', 'data-webpack\\;confidence'),
    matchRegexInInnerHTML('script', 'Container initialization failed as it has already been initialized with a different share scope'),
    // in html

    // in text

    // in css
])
