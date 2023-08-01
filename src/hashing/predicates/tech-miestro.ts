import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.miestro\\.com'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'base_url', '.+\\.miestro\\.com'),
    // in scripts

    // in html

    // in text

    // in css
])
