import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'accounts\\.google\\.com/gsi/client'),
    // in dom
    matchSelector(`iframe[src*='accounts.google.com/o/oauth2'], a[href*='accounts.google.com/o/oauth2']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'google-signin-client_id', ''),
    matchRegexInAttribute('meta', 'google-signin-scope', ''),
    // in scripts

    // in html

    // in text

    // in css
])
