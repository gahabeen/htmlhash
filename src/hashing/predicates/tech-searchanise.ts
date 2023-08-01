import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'searchanise(?:-.+\\.kxcdn)?\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Searchanise'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
