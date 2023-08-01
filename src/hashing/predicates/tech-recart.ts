import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'api\\.recart\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '__recart'),
    matchRegexInInnerHTML('script', 'recart'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
