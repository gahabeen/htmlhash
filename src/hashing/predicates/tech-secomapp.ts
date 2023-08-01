import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.secomapp\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'SECOMAPP'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
