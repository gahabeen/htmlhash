import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'spryker.config'),
    // in meta
    matchRegexInAttribute('meta', 'generator', 'spryker'),
    // in scripts

    // in html

    // in text

    // in css
])
