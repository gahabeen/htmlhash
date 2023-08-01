import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Quick\\.Cart(?: v([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<a href="[^>]+opensolution\\.org/">(?:Shopping cart by|Sklep internetowy)'),
    // in text

    // in css
])
