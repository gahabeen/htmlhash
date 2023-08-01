import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'include/linkexternal\\.js'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', 'ImpressCMS'),
    // in scripts

    // in html

    // in text

    // in css
])
