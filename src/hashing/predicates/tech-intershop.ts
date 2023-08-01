import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:is-bin|INTERSHOP)'),
    // in dom

    // in js

    // in meta

    // in scripts

    // in html
    matchRegex('<ish-root'),
    // in text

    // in css
])
