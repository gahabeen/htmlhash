import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'vsf-layout\\;version'),
    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Vue Storefront ([0-9.]+)?$\\;version:\\1'),
    // in scripts

    // in html

    // in text

    // in css
])
