import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'return\\.clicksit\\.com/'),
    // in dom
    matchSelector(`a[href*='return.clicksit.com/shop/']`),
    // in js
    matchRegexInInnerHTML('script', 'clicksit_window_on_load'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
