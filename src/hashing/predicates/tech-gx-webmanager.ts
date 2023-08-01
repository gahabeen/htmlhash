import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'GX WebManager(?: ([\\d.]+))?\\;version:\\1'),
    // in scripts

    // in html
    matchRegex('<!--\\s+Powered by GX'),
    // in text

    // in css
])
