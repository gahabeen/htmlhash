import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='kitcart.net'][target='_blank'], form[action*='kitcart.net/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
