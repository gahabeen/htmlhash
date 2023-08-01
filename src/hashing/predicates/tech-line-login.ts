import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[href*='access.line.me/']`),
    // in js
    matchRegexInInnerHTML('script', 'Constants.authorization_request_url'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
