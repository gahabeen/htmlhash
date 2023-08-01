import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '(?:cdn|id)\\.gravitec\\.(?:media|net)'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Gravitec'),
    matchRegexInInnerHTML('script', 'gravitecWebpackJsonp'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
