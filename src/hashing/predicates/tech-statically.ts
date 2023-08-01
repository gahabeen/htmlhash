import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.statically\\.io/'),
    // in dom
    matchSelector(`link[href*='cdn.statically.io/'], a[href*='cdn.statically.io/']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
