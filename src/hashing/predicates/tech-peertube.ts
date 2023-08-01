import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`#incompatible-browser p`),
    // in js

    // in meta
    matchRegexInAttribute('meta', 'og:platform', '^PeerTube$'),
    // in scripts

    // in html

    // in text

    // in css
])
