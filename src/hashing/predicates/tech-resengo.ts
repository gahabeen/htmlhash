import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'www\\.resengo\\.\\w+'),
    // in dom
    matchSelector(`iframe[src*='resengo']`),
    // in js
    matchRegexInInnerHTML('script', 'wpJsonpResengoReservationWidget'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
