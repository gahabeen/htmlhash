import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.authorize\\.net/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'config.authorizenet_public_client_key'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
