import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute

    // in dom

    // in js

    // in meta
    matchRegexInAttribute('meta', 'generator', '^Sympa$'),
    // in scripts

    // in html
    matchRegex('<a href="https?://www\\.sympa\\.org">\\s*Powered by Sympa\\s*</a>'),
    // in text

    // in css
])
