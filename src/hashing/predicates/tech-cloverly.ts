import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'apps\\.cloverly\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'removeCloverly'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
