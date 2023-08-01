import { anyOf, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    // in dom
    matchSelector(`[src*='www.gstatic.com'], [href*='www.gstatic.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
