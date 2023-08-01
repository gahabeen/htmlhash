import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'cdn\\.dealerspike\\.com'),
    // in dom
    matchSelector(`meta[name='author'][content*='Dealer Spike']`),
    // in js

    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
