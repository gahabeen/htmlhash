import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'appleid\\.auth\\.js'),
    // in dom
    matchSelector(`a[href*='appleid.apple.com/auth/authorize']`),
    matchSelector(`button`),
    // in js
    matchRegexInInnerHTML('script', 'AppleID'),
    // in meta
    matchRegexInAttribute('meta', 'appleid-signin-client-id', ''),
    // in scripts

    // in html

    // in text

    // in css
])
