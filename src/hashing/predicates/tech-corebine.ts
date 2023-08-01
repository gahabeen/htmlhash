import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#corebine-app`),
    // in js
    matchRegexInInnerHTML('script', 'corebine'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
