import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '//unpkg\\.com/hyperscript\\.org@([\\d\\.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', '_hyperscript'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
