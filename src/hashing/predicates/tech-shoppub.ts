import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Shoppub.store'),
    // in meta
    matchRegexInAttribute('meta', 'author', '^Shoppub$'),
    // in scripts

    // in html

    // in text

    // in css
])
