import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.purpleads\\.io/'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'purpleads-verification', ''),
    // in scripts

    // in html

    // in text

    // in css
])
