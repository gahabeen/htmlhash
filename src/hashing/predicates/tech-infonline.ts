import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https?://(?:[^/]+\\.)?i(?:oam|v)wbox\\.de/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'iam_data'),
    matchRegexInInnerHTML('script', 'szmvars'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
