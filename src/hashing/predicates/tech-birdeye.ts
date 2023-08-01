import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'birdeye\\.com/embed'),
    matchRegexInAttribute('script', 'src', 'birdeye\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'bfiframe'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
