import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'grandnode'),
    // in scripts

    // in html
    matchRegex('(?:<!--GrandNode |<a[^>]+grandnode - Powered by |Powered by: <a[^>]+nopcommerce)'),
    // in text

    // in css
])
