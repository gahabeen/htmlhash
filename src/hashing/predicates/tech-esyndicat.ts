import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js
    matchRegexInInnerHTML('script', 'esyndicat'),
    // in meta
    matchRegexInAttribute('meta', 'generator', '^eSyndiCat '),
    // in scripts

    // in html

    // in text

    // in css
])
