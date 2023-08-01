import { anyOf, matchRegexInAttribute, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.adform\\.net/'),
    // in dom
    matchSelector(`link[href*='.adformdsp.net'], link[href*='.adform.net']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
