import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'zakekeBoot'),
    matchRegexInInnerHTML('script', 'zakekeCustomizeLabel'),
    matchRegexInInnerHTML('script', 'zakekeLoading'),
    matchRegexInInnerHTML('script', 'zakekeProductPage'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
