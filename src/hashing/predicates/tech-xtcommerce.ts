import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'xt:Commerce'),
    // in scripts

    // in html
    matchRegex('<div class="copyright">[^<]+<a[^>]+>xt:Commerce'),
    // in text

    // in css
])
