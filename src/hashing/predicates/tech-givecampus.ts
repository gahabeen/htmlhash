import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.givecampus.com/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'author', '^GiveCampus$'),
    // in scripts

    // in html

    // in text

    // in css
])
