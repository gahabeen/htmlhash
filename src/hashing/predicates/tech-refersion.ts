import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.refersion\\.com'),
    // in dom
    matchSelector(`a[href*='.refersion.com']`),
    matchSelector(`img[src*='cdn.refersion.com'],img[src*='s3.amazonaws.com/refersion_client/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
