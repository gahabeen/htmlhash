import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.pushowl\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'pushowl'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
