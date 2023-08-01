import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'fomo\\.com/api/v'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'fomo.version'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
