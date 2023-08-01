import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.valuecommerce\\.com'),
    // in dom
    matchSelector(`a[href*='ap.valuecommerce.com']`),
    matchSelector(`img[src*='ap.valuecommerce.com'],img[data-src*='ap.valuecommerce.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
