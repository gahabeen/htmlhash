import { anyOf, matchRegex, matchRegexInAttribute, matchRegexInInnerHTML, matchSelector } from '../matchers'

export const predicate = anyOf([
    // in attribute
    matchRegexInAttribute('script', 'src', '\\.sumo(?:me)?\\.com/'),
    // in dom

    // in js
    matchRegexInInnerHTML('script', 'sumo'),
    matchRegexInInnerHTML('script', 'sumome'),
    // in meta

    // in scripts

    // in html

    // in text

    // in css
])
