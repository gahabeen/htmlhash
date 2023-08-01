import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'DC.identifier', '/content\\.jsp\\?objectid='),
    // in scripts

    // in html
    matchRegex('<img[^>]+/dsresource\\?objectid='),
    // in text

    // in css
])
