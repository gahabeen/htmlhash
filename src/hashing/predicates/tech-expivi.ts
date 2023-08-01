import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.expivi\\.(?:com|net)/'),
    // in dom
    matchSelector(`iframe[src*='.expivi.net/']`),
    // in js
    matchRegexInInnerHTML('script', 'ExpiviComponent'),
    matchRegexInInnerHTML('script', 'expivi'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
