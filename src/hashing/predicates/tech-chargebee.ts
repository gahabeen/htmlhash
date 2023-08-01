import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'js\\.chargebee\\.com/v([\\d.]+)\\;version:\\1'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'Chargebee'),
    matchRegexInInnerHTML('script', 'chargebeeTrackFunc'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
