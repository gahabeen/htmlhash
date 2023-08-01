import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom
    matchSelector(`a[style*='.accentuate.io/'], a[data-bg*='.accentuate.io/'], div[style*='.accentuate.io/'], img[src*='.accentuate.io/'], img[data-src*='.accentuate.io/']`),
    // in js

    // in meta

    // in scripts
    matchRegexInInnerHTML('script', '\\.accentuate\\.io/'),
    // in html

    // in text

    // in css
])
