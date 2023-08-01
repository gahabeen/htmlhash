import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'StoreinoApp'),
    // in meta
    matchRegexInAttribute('meta', 'platform', '^Storeino$'),
    // in scripts

    // in html

    // in text

    // in css
])
