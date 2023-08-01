import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'sites\\/g\\/files'),
    // in dom
    matchSelector(`script[src*='sites/g/files']`),
    matchSelector(`img[src*='sites/g/files']`),
    matchSelector(`img[data-src*='sites/g/files']`),
    matchSelector(`link[href*='sites/g/files']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
