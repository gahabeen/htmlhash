import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:/|_)tiki'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Tiki'),
    // in scripts

    // in html

    // in text

    // in css
])
