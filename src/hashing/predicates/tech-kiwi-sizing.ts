import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.static\\.kiwisizing\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'KiwiSizing'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
