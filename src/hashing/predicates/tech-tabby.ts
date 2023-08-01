import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'checkout\\.tabby\\.ai'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Tabby'),
    matchRegexInInnerHTML('script', 'TabbyPromo'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
