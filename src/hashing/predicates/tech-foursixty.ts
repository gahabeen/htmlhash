import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', 'foursixty\\.com'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'FoursixtyEmbed'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
