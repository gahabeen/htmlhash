import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.etix.com/ticket/'][target='_blank']`),
    // in js
    matchRegexInInnerHTML('script', 'Etix.javaContext'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
