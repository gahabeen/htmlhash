import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.advertising\\.com'),
    matchRegexInAttribute('script', 'src', '\\.vidible\\.tv/'),
    // in dom
    matchSelector(`img[src*='pixel.advertising.com']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
