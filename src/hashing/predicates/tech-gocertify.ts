import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets\\.gocertify\\.me/'),
    // in dom
    matchSelector(`a[href*='secure.gocertify.me']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
