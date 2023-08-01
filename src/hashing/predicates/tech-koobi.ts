import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Koobi'),
    // in scripts

    // in html
    matchRegex('<!--[^K>-]+Koobi ([a-z\\d.]+)\\;version:\\1'),
    // in text

    // in css
])
