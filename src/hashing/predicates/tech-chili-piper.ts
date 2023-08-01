import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.chilipiper\\.com/marketing\\.js'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'ChiliPiper'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
