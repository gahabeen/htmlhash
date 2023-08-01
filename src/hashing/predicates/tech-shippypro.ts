import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='.shippypro.com/return-form.html']`),
    // in js
    matchRegexInInnerHTML('script', 'ShippyProReturnForm'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
