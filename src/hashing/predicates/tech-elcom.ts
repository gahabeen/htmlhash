import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^elcomCMS'),
    // in scripts

    // in html

    // in text
    matchRegex('Web CMS by Elcom'),
    // in css
])
