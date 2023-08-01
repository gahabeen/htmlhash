import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'eum\\.instana\\.io'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ineum'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
