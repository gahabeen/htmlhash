import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '/OrchardCore\\.'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'Orchard'),
    // in scripts

    // in html

    // in text

    // in css
])
