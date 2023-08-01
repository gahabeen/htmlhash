import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'widgets\\.getpocket\\.com/'),
    // in dom
    matchSelector(`iframe[src*='widgets.getpocket.com/']`),
    // in js

    // in meta
    matchRegexInAttribute('meta', "pocket-site-verification'", ''),
    // in scripts

    // in html

    // in text

    // in css
])
