import { anyOf, matchRegexInAttribute, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'ajax\\.googleapis\\.com/ajax/libs/'),
    // in dom
    matchSelector(`[href*='ajax.googleapis.com/ajax/libs']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
