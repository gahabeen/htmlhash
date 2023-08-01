import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '^https://cdn\\.splitbee\\.io/sb\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'splitbee'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
