import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'assets/\\d+-\\d+/stack/en/widenjs\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'WidenSessionTimer'),
    matchRegexInInnerHTML('script', 'WidenUI'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
