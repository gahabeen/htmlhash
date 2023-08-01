import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^immutable\\.(?:min\\.)?js$'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Immutable'),
    matchRegexInInnerHTML('script', 'Immutable.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
